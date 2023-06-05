import Pessoa from '../models/pessoa.model.js'
import Endereco from '../models/endereco.model.js'

async function findAll(request, response) {
    Pessoa.findAll().then((results) => {
        response.json(results)
        response.status(200)
    })
}

async function findByPk(request, response) {
    Pessoa.findByPk(request.params.id, {include: Endereco}).then((result) => {
        response.json(result)
        response.status(200)
    })
}

async function create(request, response) {
    Pessoa.create({
        nome: request.body.nome, 
        idade: request.body.idade
    }).then((result) => {
        response.json(result)
        response.status(201)
    })
}

async function update(request, response) {
    Pessoa.update({
        nome: request.body.nome, 
        idade: request.body.idade
    }, { 
        where: { id: request.params.id } 
    }).then((result) => {
        response.json(result)
        response.status(200)
    })
}

async function deleteByPk(request, response) {
    Pessoa.destroy({where: {
        id: request.params.id 
    }}).then(() => {
        response.status(200).send()
    })
}

export default {findAll, findByPk, create, update, deleteByPk}