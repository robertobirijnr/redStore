const formidable = require('formidable')
const _ = require('lodash')
const Product = require('../module/product')
const fs = require('fs')
const { errorHandler } = require('../middlewares/errorHandler')

exports.getAllProducts=(req,res)=>{

}

exports.createProduct =(req,res)=>{
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req,(err,fields,files)=>{
        if(err){
            return status(400).json({
                error:"image could not be uploaded"
            })
        }
        let product = new Product(fields)

        if(files.photo){
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