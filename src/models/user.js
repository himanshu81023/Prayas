const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const patient = require('../models/patient')
// const brypt = require('bcryptjs')
const userschema = new mongoose.Schema({name:{
    type:String,
    required:false,
    trim:true /// abhi  ke  liye
},
email:{type:String,
     required:true,
     unique:true,
    trim:true,
    lowercase:true,
    validate(value){
        if(!validator.isEmail(value)){
            throw new Error('Email is invalid')
        }
    }
},
password:{
      type:String,
      required:true,
      unique:true 
},
tokens:[{
     token:{
        type:String,
        required:true
     }
}]
// address:{
//       type:String,
//       required:true,
// },
// phoneNo:{
//     type:Number,
//     required:true
// }
})
userschema.virtual('pat',{
    ref:'patient',
    localField:'_id',
    foreignField:'user'
})
// userSchema.methods.toJSON = function(){
//     const usr = this;
//     const user = usr.toObject()
//     delete user.tokens;
//     delete user.password;
//     return user
//  }
userschema.methods.toJSON = function (){
    user = this
    userObject = user.toObject()
    delete userObject.password
    delete userObject.tokens
    return userObject
}
 
 userschema.methods.generateAuthToken = async function () {
    //console.log("hi")
     const user = this
    
     const token = jwt.sign({_id:user._id.toString()},process.env.SECRET_STRING)
      user.tokens = user.tokens.concat({ token })
      await user.save()
   
     return token
 }
 
 userschema.statics.findByCredentials = async (email, password) => {
     const user = await User.findOne({ email })
 
     if (!user) {
         throw new Error('Unable to login')
     }
 
     const isMatch = await bcrypt.compare(password, user.password)
 
     if (!isMatch) {
         throw new Error('Unable to login')
     }
 
     return user
 }
 
 // Hash the plain text password before saving
 userschema.pre('save', async function (next) {
     const user = this
 
     if (user.isModified('password')) {
         user.password = await bcrypt.hash(user.password, 8)
     }
 
     next()
 })
 
 userschema.pre('remove', async function (next){
     const user = this
     await Task.deleteMany({owner:user._id})
     next()
 })
 const User = mongoose.model('User', userschema)
 
 module.exports = User
 

