const express = require('express')
const { signup, signin } = require('../controller/user')
const { userSignupValidator } = require('../middlewares/validator')
const router = express.Router()



router
    .route('/signup')
    .post(userSignupValidator, signup)

router
    .route('/signin')
    .post(signin)    



module.exports = router    
    