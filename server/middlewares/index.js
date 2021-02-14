const expressjwt = require('express-jwt');

exports.protected = expressjwt({
    secret:process.env.JWT_SECRETE,
    algorithms: ["HS256"],
    userProperty:'auth'
})

exports.isAuth = (req,res,next)=>{
    let user = req.profile && req.auth && req.profile._id == req.auth._id;
    console.log(user)
    if(!user){
        return res.status(403).json({
            error:"Access denied"
        })
    }

    next()
}

exports.isAdmin = (req,res,next)=>{
    if(req.profile.role === 0){
        return res.status(403).json({
            error:"Admin resource! Access denied"
        })
    }
    next()
}