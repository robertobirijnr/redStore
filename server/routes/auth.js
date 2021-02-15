const express = require('express')
const { signup, signin, signout, getUserProfile, read, updateProfile } = require('../controller/auth')
const { protected, isAuth } = require('../middlewares')
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


router.get('/profile/:userId',protected,isAuth, (req,res)=>{
    res.json({
        user: req.profile
    })
})

router
    .route('/user/:userId')
    .get(read)
    .put(updateProfile)

router.param('userId',getUserProfile)

module.exports = router    
    