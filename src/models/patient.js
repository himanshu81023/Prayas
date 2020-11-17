const mongoose = require('mongoose')
const User = require("../models/user")
const patientschema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,

    },
    parents_name: {
        type: String,
        required: true,
        trim: true
    },
    relation: {
        type: String,
        required: true,
        trim: true
    },
    phone_no: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    disease: {
        type: String,
        required: true,
    },
    doctor: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    hospital: {
        type: String,
        required: true
    },
    verification: {
        type: Boolean,
        required: false,
        default: false
    },
    date: {
        type: String,
        required: false,
        default :"0-0-0000"
    },
    time: {
        type: Time,
        required: false,
        default :"0:0 AM"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})


const Patient = mongoose.model('Patient', patientschema)
module.exports = Patient