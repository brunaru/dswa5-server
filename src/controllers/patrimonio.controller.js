import Patrimonio from '../models/patrimonio.model.js'
import Pessoa from '../models/pessoa.model.js'

async function findAll(request, response) {
    Patrimonio.findAll({include: Pessoa}).then(function(result) {
        response.json(result)
        response.status(200)
    })
}

async function findByPk(request, response) {
    Patrimonio.findByPk(request.params.id, {include: Pessoa}).then(function(result) {
        response.json(result)
        response.status(200)
    })
}

async function create(request, response) {
    Patrimonio.create({
        nome: request.body.nome,
        valor: request.body.valor,
        //foto: 'http://127.0.0.1:9000/devweb5/' + request.file.key,
        foto: request.body.foto,
        responsavelId: request.body.responsavelId
    }).then(function(result) {
        response.json(result)
        response.status(201)
    })
}

async function update(request, response) {
    Patrimonio.update({
        nome: request.body.nome,
        valor: request.body.valor,
        //foto: 'http://127.0.0.1:9000/devweb5/' + request.file.key,
        foto: request.body.foto,
        responsavelId: request.body.responsavelId
    }, {
        where: {
            id: request.params.id
        }
    }).then(function(result) {
        response.json(result)
        response.status(200)
    })
}

async function deleteByPk(request, response) {
    Patrimonio.destroy( {
        where: {
            id: request.params.id,

        }
    }).then(function(result) {
        response.status(200).send()
    })
}

export default { findAll, findByPk, create, update, deleteByPk }