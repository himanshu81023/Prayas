const express = require('express')
const router = express.Router()
const  User = require('../models/user')

router.post('/signup',async (req,res)=>{
    
    // const doc = {
    //     email : req.query.email,
    //     password :req.query.password
    // }
    // console.log(doc)
    console.log(req.body)
    const  user=  new User(req.body)
    console.log(user)
    user.save().then(()=>{res.send(user)}).catch((error)=>{
        res.status(400).send("error occured")
    })
   // res.send("hi how are you")
})
router.post('/login',async (req,res)=>{
    
    
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        res.send(user)
    } catch (e) {
        res.status(400).send()
    }
   // res.send("hi how are you")
})
router.get('/hey',async (req,res)=>{
    //console.log(req.body)
    res.send("hey")
})

router.get('/users',async (req,res)=>{
    //console.log(req.body)
    const  user = await User.find({})
    console.log(user)
    if(user)
    {
        res.status(200).send(user)
    
    }
    else
    {
        res.status(400).send("Not Logged in")
    }
})


module.exports = router