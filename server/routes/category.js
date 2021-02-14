const express = require('express');
const { getUserProfile } = require('../controller/auth');
const { createCategory } = require('../controller/category');
const { isAdmin, protected, isAuth } = require('../middlewares');
const router = express.Router();

router
    .route('/category/create/:userId')
    .post(protected, isAuth ,isAdmin, createCategory)


router.param('userId',getUserProfile)    
module.exports = router;    