const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/prayas'
mongoose.connect(url,{useNewUrlParser:true,useUnifiedToplogy:true})

// const User2 = mongoose.model('User2',{name:{type:String},
//                             class:{type:String}})
// const db = new User2({name:'himanshu',class:'btech'})
// db.save().then(()=>{
//     console.log("hi")
// }).catch((error)=>{
//     console.log("errorfound")
// })