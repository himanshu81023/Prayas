const mongoose = require('mongoose')
const validator = require('validator')
// const brypt = require('bcryptjs')
const userschema = new mongoose.Schema({name:{
    type:String,
    required:false,
    trim:true /// abhi  ke  liye
},
email:{type:String,
     required:true,
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
}
// address:{
//       type:String,
//       required:true,
// },
// phoneNo:{
//     type:Number,
//     required:true
// }
})


const User = mongoose.model('User',userschema)
module.exports = User