exports.userSignupValidator = (req,res,next)=>{
    req.check('name',"Name is required").notEmpty()
    req.check('email','Email must be between 3 to 32 characters')
        .matches(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)
        .withMessage('Email must contain @')
        .isLength({
            min:4,
            max:32
        });
    req.check('password','Password is required').notEmpty()
    req.check('password')
        .isLength({ min:6 })
        .withMessage('Password must contain at least 6 characters')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
        .withMessage("Password must contain a minimum of eight characters, at least one letter and one number")

        const errors = req.validationErrors()
        if(errors){
            const firstError  = errors.map(error => error.msg)[0];
            return res.status(400).json({error: firstError})
        }

        next();

}