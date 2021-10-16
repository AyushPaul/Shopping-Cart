
function fetchProducts (done) {
    $.get('/api/products', function (data) {
        done(data)
    })
}

function addProduct (name, manuf, price, done) {
    $.post('/api/products', {
        name: name,
        manufacturer: manuf,
        price: price
    }, function (data) {
        done(data)
    })
}

function createProductCard (product) {
    return $(`
    <div class="col-12 col-sm-12 col-md-5 card m-4 p-4" style="width: 10em;">
        <h4 class="product-name">${product.name}</h4>
        <div class="product-manufacturer">${product.manufacturer}</div>
        <div class="row">
            <div class="col-6 col-sm-12 col-md-3 m-7 p-3">
                <b>Rs. ${product.price}</b>
            </div>
            <button class="col btn btn-primary m-3" onclick="location.href = './verify_user.html'">Buy</button> 
        </div>
    </div>`
        )
}
