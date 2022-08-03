const express = require('express');
const faker = require('@faker-js/faker').faker;

const router = express.Router();
faker.locale = 'es';

router.route('/').get((req, res) => {
    let productLista = [];

    for (i = 0; i < 5; i++) {
        let producto = {};
        producto.id = i + 1;
        producto.title = faker.commerce.productName();
        producto.price = faker.commerce.price();
        producto.thumbnail = faker.image.image();
        productLista.push(producto);
    }

    let hasAny = true;
    res.render('productosTest', { productLista, hasAny });
    // res.json(productos);
})

module.exports = router;