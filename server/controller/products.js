const formidable = require('formidable')
const _ = require('lodash')
const Product = require('../module/product')
const fs = require('fs')
const { errorHandler } = require('../middlewares/errorHandler')


//getting product image separately. 
exports.getProductImage = (req,res,next) =>{
    if(req.product.photo.data){
        res.set('Content-Type', req.product.photo.contentType)
        return res.send(req.product.photo.data)
    }

    next()
}

//  get all products base on arrivals and sells
//  by arrival = /products?sortBy=createdAt&order=desc

exports.getAllProducts=(req,res)=>{
    let order = req.query.order ? req.query.order :'asc'
    let sortBy = req.query.sortBy ? req.query.sortBy :'_id'
    let limit = req.query.limit ? parseInt(req.query.limit):6

    Product.find()
            .select('-photo')
            .populate('category')
            .sort([[sortBy,order]])
            .limit(limit)
            .exec((err,product)=>{
                if(err){
                    return res.status(400).json({
                        error:"Products not found"
                    })
                }

                res.json({
                    "total products":product.length,
                    product
                })
            })
}

exports.getProductCategories= (req,res)=>{
    Product.distinct('category',{},(err,categories)=>{
        if(err){
            return res.status(400).json({
                error:"product not found"
            })
        }
        res.json(categories)
    })
}



//Get related products base on product id and it category
exports.getRelatedProducts =(req,res) =>{
    let limit = req.query.limit ? parseInt(req.query.limit):6

    Product.find({_id: {$ne: req.product}, category:req.product.category})
    .limit(limit)
    .populate('category','_id name')
    .exec((err,data)=>{
        if(err){
            return res.status(400).json({
                error:"Products not found"
            })
        }
        res.json(data)
    })
}

exports.createProduct =(req,res)=>{
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req,(err,fields,files)=>{
        if(err){
            return res.status(400).json({
                error:"image could not be uploaded"
            })
        }

        //check for all fields validate
        const {name, description,price,category,quantity,shipping} = fields

        if(!name || !description || !price ||!category || !quantity || !shipping){
            return res.status(400).json({
                error:"All fields required"
            })
        }

        let product = new Product(fields)

        if(files.photo){

            if(files.photo.size > 1000000){
                return res.status(400).json({
                    error:"Image size too big"
                })
            }

            product.photo.data = fs.readFileSync(files.photo.path)
            product.photo.contentType = files.photo.type
        }

        product.save((err,result)=>{
            if(err){
                return res.status(400).json({
                    error:errorHandler(err)
                })
            }
            res.json({result})
        })
    })
}


//product byId
exports.productById =(req,res,next,id)=>{
    Product.findById(id).exec((err,product)=>{
        if(err){
            return res.status(400).json({
                error:"product not found"
            })
        }
        req.product = product;
        next()
    })
}

//get single product using Id
exports.getProductDetail =(req,res)=>{
    //we dont want to send photo due to size here!
    req.product.photo = undefined
    let product = req.product
    if(product){
        return res.json(product);
    }else{
        return res.status(404).json({
            error:"can not be found"
        })
    }
    
}

exports.deleteProduct =(req,res)=>{
    let product = req.product
    product.remove((err,deletedProduct)=>{
        if(err){
            return res.status(400).json({
                error:errorHandler(err)
            })
        }

        res.json({
            "message":"Product deleted successfully"
        })
    })
}


exports.updateProduct =(req,res)=>{
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req,(err,fields,files)=>{
        if(err){
            return res.status(400).json({
                error:"image could not be uploaded"
            })
        }

        //check for all fields validate
        const {name, description,price,category,quantity,shipping} = fields

        if(!name || !description || !price ||!category || !quantity || !shipping){
            return res.status(400).json({
                error:"All fields required"
            })
        }

        let product = req.product
        product = _.extend(product,fields)

        if(files.photo){

            if(files.photo.size > 1000000){
                return res.status(400).json({
                    error:"Image size too big"
                })
            }

            product.photo.data = fs.readFileSync(files.photo.path)
            product.photo.contentType = files.photo.type
        }

        product.save((err,result)=>{
            if(err){
                return res.status(400).json({
                    error:errorHandler(err)
                })
            }
            res.json({result})
        })
    })
}


