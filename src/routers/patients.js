const express = require('express')
const Patient = require('../models/patient')
const auth = require('../middleware/auth')
const router = express.Router()
router.post('/patients', auth, async (req, res) => {

    console.log("pos patient is running ")

    const patient = new Patient({ ...req.body, user: req.user._id })
    console.log(patient)
    patient.save().then(() => { res.send(patient) }).catch((error) => {
        res.status(400).send(error)
    })
    // res.send("hi this is me")
})

router.get('/patients', auth, async (req, res) => {
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