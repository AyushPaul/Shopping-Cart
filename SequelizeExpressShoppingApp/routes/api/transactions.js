const Transaction = require('../../db').Transaction
const route = require('express').Router();

route.get('/', (req, res) => {
    // Get all products
    Transaction.findAll()
        .then((transactions) => {
            res.status(200).send(transactions)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve products"
            })
        })
})

route.post('/', (req, res) => {
    // Validate the values
    // if (isNaN(req.body.Productname)) {
    //     return res.status(403).send({
    //         error: "ProductName Cannot Be Empty"
    //     })
    // }
    // Add a new transaction
    Transaction.create({
        Username: req.body.Username,
        Productname: req.body.Productname,
        time: Date.parse(req.body.time)
    }).then((data) => {
        res.status(201).send(data)
    }).catch((error) => {
        res.status(501).send({
            error: "Error adding product"
        })
    })
})

exports = module.exports = route