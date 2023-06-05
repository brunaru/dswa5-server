import express from 'express'
import authController from '../controllers/auth.controller.js'

const routes = express.Router()

routes.post('/signup', authController.registrar)
routes.post('/signin', authController.logar)
routes.post('/validate', authController.validarToken)

export default routes