const  mongoose = require('mongoose')
const patientschema  = new mongoose.Schema({first_name:{
    type:String,
    required:true,
    trim:true
},
last_name:{
    type:String,
    required:true,
    trim:true
},
age:{
    type:Number,
    required:true,

},
parents_name:{
    type:String,
    required:true,
    trim:true
},
relation:{
    type:String,
    required:true,
    trim:true
},
phone_no:{
  type:Number,
  required:true,
},
address:{
    type:String, 
    required:true,
},
disease:{
    type:String,
    required:true,
},
doctor:{
    type:String,
    required:true,
},
date:{
    type:Date,
    required:true,
},
hospital:{
    type:String,
    required:true
}})


const Patient = mongoose.model('Patient',patientschema)
module.exports = Patient