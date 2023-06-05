import Sequelize from 'sequelize'

const dbName = 'devpatri'
const dbUser = 'devweb'
const dbHost = 'localhost'
const dbPassword = '123456'

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    dialect: 'postgres',
    host: dbHost,
})

export default sequelize