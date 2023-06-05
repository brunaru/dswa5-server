import {Sequelize, Model, DataTypes} from 'sequelize'
import database from '../config/db.js'
import Pessoa from './pessoa.model.js'

class Endereco extends Model {}

Endereco.init({
   id:          { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
   cep:         { type: DataTypes.STRING(10), allowNull: false },
   rua:         { type: DataTypes.STRING, allowNull: false },
   numero:      { type: DataTypes.INTEGER, allowNull: false },
   complemento: { type: DataTypes.STRING },
   cidade:      { type: DataTypes.STRING, allowNull: false },
   estado:      { type: DataTypes.STRING(2), allowNull: false }
}, 
   { sequelize: database, modelName: 'endereco', timestamps: false }
)

Endereco.belongsTo(Pessoa)
Pessoa.hasMany(Endereco)

export default Endereco
