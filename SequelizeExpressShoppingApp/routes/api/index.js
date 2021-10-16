const route = require('express').Router()

route.use('/users', require('./users'))
route.use('/products', require('./products'))
route.use('/transactions', require('./transactions'))
exports = module.exports = {
    route
}