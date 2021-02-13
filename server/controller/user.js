const User = require('../module/user')

exports.signup = (req,res) =>{
  const user = new User(req.body);

  user.save((err,user)=>{
      if(err){
        return res.status(400).json({
            err
        })
      }
      res.status(200).json({
          user
      })
  })
}