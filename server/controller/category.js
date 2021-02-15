const { errorHandler } = require('../middlewares/errorHandler')
const Category = require('../module/category')


exports.categoryById = (req,res,next,id)=>{
    Category.findById(id).exec((err,category)=>{
        if(err|| !category){
            return res.status(400).json({
                error:errorHandler(err)
            })
        }

        req.category = category;
        next()
    })
}

exports.createCategory =(req,res)=>{
    const category = new Category(req.body)
    category.save((err,data)=>{
        if(err){
            return res.status(400).json({
                error:"category does not exist"
            })
        }

        res.json({data})
    })
}

exports.getCategory =(req,res) =>{
    return res.json(req.category)
}

exports.updateCategory =(req,res)=>{
    const category = req.category
    category.name = req.body.name

    category.save((err,data)=>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(data)
    })
}

exports.deleteCategory =(req,res)=>{
    const category = req.category;
    category.remove((err,data)=>{
        if(err){
            return res.status(400).json({
                error:errorHandler(err)
            })
        }

        res.status(200).json({
            "message": " category removed successfully"
        })
    })
}

exports.getAllCategories = (req,res)=>{
        Category.find().exec((err,data)=>{
            if(err){
                return res.status(400).json({
                    error:errorHandler(err)
                })
            }

            res.json(data)
        })
}