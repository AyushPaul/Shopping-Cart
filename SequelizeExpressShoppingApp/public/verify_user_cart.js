
    let userName = $('#userName')
    let pass = $('#password')
    //let productPrice = $('#productPrice')
    //let itemName = $('#itemName')
    //let price;


    $('#btnUserVerify').click(function () {
        //console.log(pass.val())
        $.get('/api/users', function (data) {
            //console.log(data)
            let flag = 0
            for(customer of data){
                //console.log(customer)
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
                //console.log(data)
                window.location.href = `http://localhost:2678/transactions/${userName.val()}`
                    //  $.get('/transactions',{
                    //     Username:userName.val(),
                    //     Password:pass.val()
                    // })
                }
                
        })
            //window.alert("Purchase by " + data.name + " Successfull!!")
    

        // addProduct(
        //     productName.val(),
        //     productManufacturer.val(),
        //     productPrice.val(),
        //     function (addedProduct) {
        //         window.alert("Added " + addedProduct.name + " to Database")
        //     }
        // )


    })

