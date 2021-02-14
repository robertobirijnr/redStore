const { errorHandler } = require('../middlewares/errorHandler')
const Category = require('../module/category')

exports.createCategory =(req,res)=>{
    const category = new Category(req.body)
    category.save((err,data)=>{
        if(err){
            return res.status(400).json({
                error:errorHandler(err)
            })
        }

        res.json({data})
    })
}