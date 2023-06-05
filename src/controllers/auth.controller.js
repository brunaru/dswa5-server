import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import Usuario from '../models/usuario.model.js'
import segredo from '../config/auth.js'

async function registrar(request, response) {

    // valores vazios
    if(!request.body.senha || !request.body.email) {
        response.status(400).send('Informe usuário e senha!')
    }

    // já existe cadastro no bd
    let user = await (Usuario.findOne({ where: { email: request.body.email } }))
    if (user) {
        response.status(400).send('Usuário já cadastrado!')
    }

    // hashing da senha
    const sal = bcrypt.genSaltSync(10)
    const hashedSenha = bcrypt.hashSync(request.body.senha, sal)

    // cadastra usuario
    Usuario.create({
      email: request.body.email,
      senha: hashedSenha,
    }).then((result) => {
        // criar e devolver o token
        const meuToken = getToken(result.dataValues.id, result.dataValues.email)
        response.status(201).send({token: meuToken})
    }).catch((erro) => response.status(500).send(erro))
}

function getToken(uid, uemail) {
    const meuToken = jwt.sign({ 
            sub: uid,
            email: uemail }, 
            segredo, {
            expiresIn: '7d' })
    return meuToken
}

async function logar(request, response) {
    // valores vazios
    if(request.body.senha == null || request.body.email == null) {
        response.status(400).send('Informe usuário e senha!')
    }

    // não existe
    const user = await (Usuario.findOne({ where: { email: request.body.email } }))
    if (!user) {
        response.status(400).send('Usuário não cadastrado!')
    }

    // compara senha
    const ehIgual = bcrypt.compareSync(request.body.senha, user.senha)
    // inválida
    if (!ehIgual) {
        response.status(401).send('Usuário e senha inválidos!')
    }
    // usuário e senha válidos, cria token
    const meuToken = getToken(user.id, user.email)
    response.status(200).json({id: user.id, email: user.email, token: meuToken})
}

async function validarToken(request, response) {
    const token = request.body.token
	if (!token) {
		return response.send(false)
	}
	try {
		const decodedToken = jwt.verify(token, segredo)
        return response.send(true)
	} catch (e) {
		return response.send(false)
	}
}

export default { registrar, logar, validarToken }