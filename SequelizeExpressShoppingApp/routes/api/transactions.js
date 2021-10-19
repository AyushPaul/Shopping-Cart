const Transaction = require('../../db').Transaction
const route = require('express').Router();
//route.set('view engine' , 'hbs')
//route.set('views' , path.resolve(__dirname,'./public/views'))

route.get('/', (req, res) => {
    // Get all products
    console.log(req.query)
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



route.post('/', async (req, res) => {
    // Validate the values
    // if (isNaN(req.body.Productname)) {
    //     return res.status(403).send({
    //         error: "ProductName Cannot Be Empty"
    //     })
    // }
    // Add a new transaction
    // console.log(req.body)
    // if(req.body.Password != '')
    // { 
    //     await Transaction.findAll({
    //         where:{
    //             Username:req.body.Username,
    //         }
    //     }).then((transactions) =>{
    //         console.log(transactions)
    //         res.render('view_transactions' , {
    //             transactions
    //         })
    //     }).catch((err) => {
    //         res.status(500).send({
    //             error: "Could not retrieve products"
    //         })
    //     })
    //     // .catch((err) => {
    //     //     res.status(500).send({
    //     //         error: "Could not retrieve user"
    //     //     })
    //     // })
    // }
    // else{
        Transaction.create({
            Username: req.body.Username,
            Productname: req.body.Productname,
            //Price:req.body.Price,
            time: Date.parse(req.body.time),
            Price:parseInt(req.body.price)
        }).then((data) => {
            res.status(201).send(data)
        }).catch((error) => {
            res.status(501).send({
                error: "Error adding product"
            })
        })
    
    
})

exports = module.exports = route