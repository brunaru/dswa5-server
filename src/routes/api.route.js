import express from 'express'
import pessoas from '../controllers/pessoa.controller.js'
import patrimonios from '../controllers/patrimonio.controller.js'
import upload from '../controllers/upload.controller.js'
import { autenticar } from '../config/auth.js'

const routes = express.Router()

routes.all('/pessoas', autenticar())
routes.all('/patrimonios', autenticar())

routes.get('/pessoas', pessoas.findAll)
routes.get('/pessoas/:id', pessoas.findByPk)
routes.post('/pessoas', pessoas.create)
routes.put('/pessoas/:id', pessoas.update)
routes.delete('/pessoas/:id', pessoas.deleteByPk)

routes.get('/patrimonios', patrimonios.findAll)
routes.get('/patrimonios/:id', patrimonios.findByPk)
//routes.post('/patrimonios', upload.single('arquivo'), patrimonios.create)
//routes.put('/patrimonios/:id', upload.single('arquivo'), patrimonios.update)
routes.post('/patrimonios', patrimonios.create)
routes.put('/patrimonios/:id', patrimonios.update)
routes.delete('/patrimonios/:id', patrimonios.deleteByPk)

export default routes