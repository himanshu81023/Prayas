const express = require('express')
const router = express.Router()
const Patient = require('../models/patient')


router.post('/patients',async(req,res)=>{

   console.log( "pos patient is running ")
   
    const patient = new Patient(req.body)
    console.log(patient)
    patient.save().then(()=>{res.send(patient)}).catch((error)=>{
        res.status(400).send(error)
    })
    // res.send("hi this is me")
})

router.get('/patients',async(req,res)=>{
      const patient = await Patient.find({})
      res.send(patient)
})


// router.get('/patients',async(req,res)=>{
//     // console.log( "pos patient is running ")
//     // const patient = new Patient(req.body)
//     // patient.save().then(()=>{res.send(patient)}).catch((error)=>{
//     //     res.status(400).send("error occured")
//     // })
//     res.send("hi this is me")
// })

module.exports = router