const express = require('express')
//const user = require('../models/user')
const Doctor = require('../models/doctor')
const router = express.Router()

router.post('/doctors',async (req,res)=>{
    console.log(req.body)
     const  doc = new Doctor({...req.body}) //in place of ...req.body we can user
     doc.save().then(()=>{
         console.log("hi")
         res.status(200).send(doc)
    }).catch((error)=>{
         console.log(error)
         res.status(400).send("error occur")
     }) 

})

router.get('/doctors',async (req,res)=>{
    //console.log(req.body)
    const  doctor = await Doctor.find()
    console.log(doctor)
    console.log("hi how are you")
    if(doctor)
    {
        res.status(200).send(doctor)
    }
    else{
        res.status(400).send("NO  MATCH FIND")

    }
})

module.exports = router
