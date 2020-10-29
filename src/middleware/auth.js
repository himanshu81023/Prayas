const jwt = require('jsonwebtoken')
const User = require('../models/user')
const  auth = async(req,res,next)=> {
   try{
    const token = req.headers['authorization'].replace("Bearer ", "")
    const decoded = jwt.verify(token,"heyicannowmakethis")
    // console.log(decoded)
    const user = await User.findOne({_id:decoded._id,'tokens.token':token})
    if(!user){
        throw new Error()
    }
    req.user = user
    req.token = token
    //console.log(user)
    next()
   }catch(e){
       res.status(401).send({error:":please athenticate"})
   }   
}

module.exports = auth