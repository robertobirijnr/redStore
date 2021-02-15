const express = require('express');
const { getUserProfile } = require('../controller/auth');
const { getAllProducts,
     createProduct,
     productById,
      getProductDetail, 
     deleteProduct, 
     updateProduct, 
     getRelatedProducts,
     getProductCategories,
     getProductImage
     } = require('../controller/products');
const { protected, isAuth, isAdmin } = require('../middlewares');
const router = express.Router()


router
    .route('/products')
    .get(getAllProducts)

router 
    .route('/product/:productId')
    .get(getProductDetail) 

router
    .route('/products/related/:productId')  
    .get(getRelatedProducts) 
    
router
     .route('/products/categories')
     .get(getProductCategories)

router
    .route('/product/create/:userId')
    .post(protected,isAuth,isAdmin,createProduct)

router 
    .route('/product/:productId/:userId')
    .delete(protected,isAuth,isAdmin,deleteProduct)  
    .put(protected,isAuth,isAdmin,updateProduct)
    
router
     .route('/product/image/:productId')
     .get(getProductImage)

router.param('userId',getUserProfile)
router.param('productId',productById)


module.exports = router;