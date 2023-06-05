import { Sequelize, Model, DataTypes } from 'sequelize'
import database from '../config/db.js'
import Pessoa from './pessoa.model.js'

class Patrimonio extends Model {}

Patrimonio.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valor: {
        type: DataTypes.FLOAT
    },
    foto: {
        type: DataTypes.STRING
    }
}, { sequelize: database, modelName: 'patrimonio', timestamps: false })

Patrimonio.belongsTo(Pessoa, {foreignKey: 'responsavelId'})
Pessoa.hasMany(Patrimonio, {foreignKey: 'responsavelId'})

export default Patrimonio