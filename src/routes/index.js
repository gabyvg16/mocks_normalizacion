const { Router } = require('express');
const router = Router();

const productos = require('./productos');

router.get('/', (req, res) => {
    res.render('index');
})

router.use('/productos', productos);

// Test
const productosTest = require('./productosTest');
router.use('/productos-test', productosTest);

module.exports = router;