import express from 'express'
import routes from './routes/api.route.js'
import authRoutes from './routes/auth.route.js'
import cors from 'cors'

const app = express()
app.use(cors())
const porta = 3001
app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', routes)
app.use(authRoutes)

app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`))