const route = require('express').Router()

route.use('/users', require('./users')) // Gives the functionality of all the GET/POST methods defined in users.js anywhere wwhenever a request is made to /api/users
route.use('/products', require('./products'))
route.use('/transactions', require('./transactions'))
exports = module.exports = {
    route
}

/*Functionality of Routing : Routing help us to test the Get/Post methods defined in the scripts on the broser(or postman) 
by mounting the required scripts on the specified paths , so that whenever that localhost url ends with that specified path the specified get/post methods are called depending on the request.
*/


/* Benefits of Routing :
1 ) If we do not do routing of various different functions of different entities then we ould have to write redundant code for the same
functionality ( eg : add_user.js and verify_user.js make the same get request to fetch user data just by calling /api/user) , which we could just have routed from one script file.

2 ) The above problem of having to write redundant code for different applications can be solved by making one centralized script which will hold the get/post methods
of all the different entities/objects ( here , products and users) but that will make the code unreadable and difficult to de-bug later.
*/