$(function () {
    let userName = $('#userName')
    let pass = $('#password')
    //let productPrice = $('#productPrice')
    
    $('#btnUserAdd').click(function () {
        //console.log(pass.val())
        $.post('/api/users', {
            name: userName.val(),
            password: pass.val(),
        }, function (data) {
            window.alert("Added " + data.name + " to DataBase")
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