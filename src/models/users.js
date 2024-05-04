const express= require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },
    logoUrl: String,
    description: String,
    aboutDescription: String,
    aboutTitle: String,
    pictureUrl: {
        home: String,
        about: String
    },
    social: [{ name: String, url: String }],
}, {
    timestamps: true
});

const UserModel = new mongoose.model("User",userSchema)

module.exports = UserModel;