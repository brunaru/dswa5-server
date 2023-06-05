import { Sequelize, Model, DataTypes } from 'sequelize'
import database from '../config/db.js'

class Pessoa extends Model {}

Pessoa.init( {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idade: {
        type: DataTypes.INTEGER
    }
}, { sequelize: database, modelName: 'pessoa', timestamps: false })

export default Pessoa