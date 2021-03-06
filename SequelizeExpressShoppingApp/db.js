const Sequelize = require('sequelize')

const db = new Sequelize('shopdb4', 'shopper', 'shoppass', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    }
})

const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

const Product = db.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    manufacturer: Sequelize.STRING,
    price: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 0
    }
})

const Transaction = db.define( 'transactions' , {
    Username:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Productname:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Price:{
        type:Sequelize.STRING,
        allowNull:false
    },
    time:Sequelize.DATE
})

db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    User, Product , Transaction
}