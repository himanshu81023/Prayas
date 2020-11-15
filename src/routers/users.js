const express = require('express')
const router = express.Router()
const auth  = require('../middleware/auth.js')
const  User = require('../models/user')

router.post('/signup',async (req,res)=>{
    
  try
  {
    const  user=  new User(req.body)
    const token = await user.generateAuthToken()
    user.save().then(()=>{res.send({user,token})}).catch((error)=>{
        res.status(400).send("error occured")
    })
   }catch(a_error){
      res.status(400).send({error:"mongodb_error",a_error})
   }
   // res.send("hi how are you")
})
router.post('/log',async (req,res)=>{
    
    
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
       // console.log(user)
        const token = await user.generateAuthToken()
       // console.log(token)
        res.send({user,token})
    } catch (e) {
        res.status(400).send()
    }
   // res.send("hi how are you")
})
// router.get('/hey',async (req,res)=>{
//     //console.log(req.body)
//     res.send("hey")
// })
router.post('/logout',auth,async(req,res)=>{
    try{
        req.user.tokens = req.user.tokens.filter((token)=>{
            return (token.token !== req.token)
       })
        await req.user.save()
        res.send("You are logged out")
    }catch(e){
        req.status(500).send("please authenticate first")
    }
 })

router.get('/users',auth,async (req,res)=>{
    console.log(req.user)
    //console.log(user)
    user  = req.user
    if(user)
    {
        res.status(200).send(req.user)
    
    }
    else
    {
        res.status(400).send("Not Logged in")
    }
})


module.exports = router