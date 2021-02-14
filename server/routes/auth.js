const express = require('express')
const { signup, signin, signout } = require('../controller/auth')
const { protected } = require('../middlewares')
const { userSignupValidator } = require('../middlewares/validator')
const router = express.Router()



router
    .route('/signup')
    .post(userSignupValidator, signup)

router
    .route('/signin')
    .post(signin)  
    
router
    .route('/signout')
    .get(signout)

router.get('/hello',protected,(req,res)=>{
    res.send('hello')
})

module.exports = router    
    