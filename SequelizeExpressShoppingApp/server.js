const express = require('express')
const path = require('path')
const Transaction = require('./db').Transaction
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine' , 'hbs')
app.set('views' , path.resolve(__dirname,'./public/views'))

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/api', require('./routes/api').route)

app.get('/transactions' , async (req , res) =>{

    Transaction.findAll()
        .then((transactions) => {
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

app.listen(2678, () => console.log('Server started at http://localhost:2678'))