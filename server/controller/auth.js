const { errorHandler } = require('../middlewares/errorHandler');
const User = require('../module/user')
const jwt = require('jsonwebtoken')


exports.signup = (req,res) =>{
  const user = new User(req.body);

  user.save((err,user)=>{
      if(err){
        return res.status(400).json({
            err:errorHandler(err)
        })
      }
      user.salt = undefined;
      user.hashed_password = undefined;
      res.status(200).json({
          user
      })
  })
}

exports.signin =(req,res)=>{
    const {email, password} = req.body

    //find user based on email
    User.findOne({email},(err,user)=>{
        if(err || !user){
            return res.status(400).json({
                err: "User with that email does not exist."
            })
        }
        //if user is found make sure the email and password match
        if(!user.authenticate(password)){
            return res.status(401).json({
                error:'Email and password dont match'
            })
        }


        const token = jwt.sign({_id: user._id},process.env.JWT_SECRETE)
        res.cookie('t',token,{expire: new Date() + 9999})

        const {_id, name,email,role} = user
        return res.json({
            token,
            user:_id, email,name,role
        })

    })
}

exports.signout =(req,res)=>{
    res.clearCookie('t')
    res.json({
        message:"Sign out success"
    })
}


exports.getUserProfile=(req,res,next,id)=>{
    User.findById(id).exec((err,user)=>{
        if(err || !user){
            return res.status(400).json({
                error:"User not found"
            })
        }

        req.profile = user;
        next();
    })
    
}