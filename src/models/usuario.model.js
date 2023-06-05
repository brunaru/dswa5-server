import { Sequelize, Model, DataTypes } from 'sequelize'
import database from '../config/db.js'

class Usuario extends Model {}

Usuario.init( {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize: database, modelName: 'usuario', timestamps: false })

export default Usuario