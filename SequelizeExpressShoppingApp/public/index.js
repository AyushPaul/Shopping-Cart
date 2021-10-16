$(function () {

    let productList = $('#product-list')

    fetchProducts(function (products) {
        productList.empty()
        for (product of products) {
            productList.append(createProductCard(product))
        }
    })

    // let buybtn = $('#buybtn')
    // buybtn.onclick = function() {
    //     console.log('Hello')
    //     location.href = "./verify_user.html";
    // }


})