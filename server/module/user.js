const mongoose = require('mongoose')
const crypto = require('crypto')
const uuidv1 = require('uuid/v1')


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        require:true,
        maxlength:32
    },
    email:{
        type:String,
        trim:true,
        require:true,
        unique:true
    },
    hashed_password:{
        type:String,
        required:true
    },
    info:{
        type:String,
        trim:true
    },
    salt:String,
    role:{
        type: Number,
        default:0
    },
    history:{
        type:Array,
        default:[]
    },
},{timestamps:true})

//virtual fields for hashing and storing password
userSchema.virtual('password')
.set(function(password){
    this._password = password
    this.salt = uuidv1()
    this.hashed_password = this.encryptPassword(password)
})

.get(function(){
    return this._password
})

// the crypto module to hash password
userSchema.methods = {
    encryptPassword:function(password){
        if(!password) return '';

        try {
            return crypto.createHmac('sha1', this.salt)
                            .update(password)
                            .digest('hex')
        } catch (error) {
            return ""
        }
    }
}

module.exports = mongoose.model('user',userSchema)