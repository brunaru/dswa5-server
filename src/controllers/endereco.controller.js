import Endereco from '../models/endereco.model.js'
import Pessoa from '../models/pessoa.model.js'

async function findAll(request, response) {
    Endereco.findAll({
        where: {
            pessoaId: request.params.fk
        }
    }).then(function (result) {
        response.json(result)
        response.status(200)
    })
}

async function create(request, response) {
    Endereco.create({
        cep: request.body.cep,
        rua: request.body.rua,
        numero: request.body.numero,
        estado: request.body.estado,
        cidade: request.body.cidade,
        pessoaId: request.params.fk
    }).then(function (result) {
        response.json(result)
        response.status(201)
    })
}

async function update(request, response) {
    await Endereco.update({
        cep: request.body.cep,
        rua: request.body.rua,
        numero: request.body.numero,
        estado: request.body.estado,
        cidade: request.body.cidade
    }, {
        where: {
            id: request.params.id
        }
    }).then(function (result) {
        response.status(200)
    })

}

function deleteByPk(request, response) {
    Pessoa.destroy({
        where: {
            id: request.params.id
        }
    }).then(function (result) {
        response.status(200).send()
    })
}

export default {
    findAll,
    create,
    update,
    deleteByPk
}

