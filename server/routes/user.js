const express = require('express')
const { getUsers } = require('../controller/user')
const router = express.Router()



router
    .route('/')
    .get(getUsers)



module.exports = router    
    