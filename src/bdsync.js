import database from './config/db.js'
import Endereco from './models/endereco.model.js'
import Patrimonio from './models/patrimonio.model.js'
import Pessoa from './models/pessoa.model.js'
import Usuario from './models/usuario.model.js'


Pessoa.sync()
Endereco.sync()
Patrimonio.sync()
Usuario.sync()