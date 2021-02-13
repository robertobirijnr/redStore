const { errorHandler } = require('../middlewares/errorHandler');
const User = require('../module/user')

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
    
}