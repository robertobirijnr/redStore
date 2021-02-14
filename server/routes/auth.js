const express = require('express')
const { signup, signin, signout, getUserProfile } = require('../controller/auth')
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


router.get('/profile/:userId',protected,(req,res)=>{
    res.json({
        user: req.profile
    })
})

router.param('userId',getUserProfile)

module.exports = router    
    