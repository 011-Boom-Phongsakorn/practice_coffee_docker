const { DataTypes } = require('sequelize')
const sequelize = require('./db')

const Coffee = sequelize.define('coffee', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Coffee.sync({ force: false }).then(() => {
    console.log(`table created or already existed!`)
}).catch((error) => {
    console.log(`error creating table`, error)
})

module.exports = Coffee