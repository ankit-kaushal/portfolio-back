const express= require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },
    description: String,
    about: String,
    pictureUrl: String,
    social: [{ name: String, url: String }],
}, {
    timestamps: true
});

const UserModel = new mongoose.model("User",userSchema)

module.exports = UserModel;