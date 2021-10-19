const express = require('express')
const path = require('path')
const Transaction = require('./db').Transaction
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine' , 'hbs')
app.set('views' , path.resolve(__dirname,'./public/views'))

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/api', require('./routes/api').route) // this mounting makes the functionality of everything present in ./routes/api , when called with /api ; this in tandem with the /users , /products and /transactions makes the functionality( i.e get/post "request methods") of user.js , product.js and transactions.js available to front-end scripts ( add_user.js , add_products.js etc)

app.get('/transactions' , async (req , res) =>{

    Transaction.findAll()
        .then((transactions) => {
            //console.log(transactions)
            res.render('view_transactions' , {
                transactions
            })
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve products"
            })
        })
})

app.get('/transactions/:name' , async (req , res) =>{

    Transaction.findAll({
        where:{
            Username:req.params.name,
        }
    })
        .then((transactions) => {
            //console.log(transactions)
            res.render('view_transactions' , {
                transactions
            })
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve products"
            })
        })
})

app.post('/cart' , async (req , res) => {
    console.log(req.body)
     Transaction.findAll({
        where:{
            Username:req.body.Username,
        }
    }).then((transactions) =>{
        //console.log(transactions)
        res.render('view_transactions' , {
            transactions
        })
    }).catch((err) => {
        res.status(500).send({
            error: "Could not retrieve products"
        })
    })
    
})

app.listen(2678, () => console.log('Server started at http://localhost:2678'))