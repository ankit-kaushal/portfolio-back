const express= require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },
    about: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    }
})

const UserData = new mongoose.model("User",userSchema)

module.exports = UserData;