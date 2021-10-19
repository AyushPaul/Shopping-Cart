$(function () {
    let userName = $('#userName')
    let pass = $('#password')
    //let productPrice = $('#productPrice')
    let itemName = $('#itemName')



    $('#btnUserVerify').click(function () {
        //console.log(pass.val())
        $.get('/api/users', function (data) {
            console.log(data)
            let flag = 0
            for(customer of data){
                console.log(customer)
                if(userName.val() == customer.name && pass.val() == customer.password)
                {
                    flag = 1
                    //window.alert('Purchase Done Successfully')
                    break;
                }
            }
            if(flag == 0)
            {
                window.alert('User Not Found')
                window.location.href = './index.html'
            }
            else{
                let price;
                $.get('/api/products', function (data) {
                    console.log(data)
                    let flag2 = 0
                    for(product of data){
                        console.log(product)
                        if(itemName.val() == product.name)
                        {
                            flag2 = 1
                            price = product.price
                            //window.alert('Purchase Done Successfully')
                            break;
                        }
                    }
                    //console.log(parseFloat(price))
                    if(flag2 == 0)
                    {
                        window.alert('Wrong Item Name ')
                    }
                    else{
                        $.post('/api/transactions' ,{
                            Username:userName.val(),
                            Productname:itemName.val(),
                            Price:price,
                            time : new Date()
                        } , function(data){
                            console.log(data)
                            window.alert('Transaction Done Successfully!!')
                            window.location.href = './index.html'
                        } )
                    }
                })
            }
            //window.alert("Purchase by " + data.name + " Successfull!!")
        })

        // addProduct(
        //     productName.val(),
        //     productManufacturer.val(),
        //     productPrice.val(),
        //     function (addedProduct) {
        //         window.alert("Added " + addedProduct.name + " to Database")
        //     }
        // )


    })

})