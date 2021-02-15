const express = require('express');
const { getUserProfile } = require('../controller/auth');
const { createCategory, categoryById, getCategory } = require('../controller/category');
const { isAdmin, protected, isAuth } = require('../middlewares');
const router = express.Router();

router
    .route('/category/create/:userId')
    .post(protected, isAuth ,isAdmin, createCategory)

router
    .route('/category/:categoryId') 
    .get(getCategory)   

router.param('userId',getUserProfile)   
router.param('categoryId',categoryById) 
module.exports = router;    