const mongoose = require('mongoose')
const validator = require('validator')
//const brypt = require('bcryptjs')
const schema = new mongoose.Schema({first_name:{
    type:String,
    required:true,
    trim:true
},
last_name:{
    type:String,
    required:true,
    trim:true
},
phoneNo:{
    type:Number,
    required:true
},
patient:{
    type:String,
}
})
const doctors = mongoose.model('doctors',schema)
module.exports = doctors