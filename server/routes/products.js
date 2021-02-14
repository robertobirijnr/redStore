const express = require('express');
const { getUserProfile } = require('../controller/auth');
const { getAllProducts, createProduct } = require('../controller/products');
const { protected, isAuth, isAdmin } = require('../middlewares');
const router = express.Router()


router
    .route('/product')
    .get(getAllProducts)


router
.route('/product/:userId')
.post(protected,isAuth,isAdmin,createProduct)


router.param('userId',getUserProfile)


module.exports = router;