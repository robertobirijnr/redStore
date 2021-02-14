const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true,
        maxlength:23
    },
    description:{
        type:String,
        required:false,
        maxlength:200
    },
    price:{
        type:Number,
        trim:true,
        required:true,
        maxlength:32
    },
    category:{
        type:ObjectId,
        ref:'category',
        required:true
    },
    quantity:{
        type:Number
    },
    photo:{
        data:Buffer,
        contentType:String
    },
    shipping:{
        required:false,
        type:Boolean
    }
},{
    timestamps:true
})

module.exports = mongoose.model('products',productSchema)