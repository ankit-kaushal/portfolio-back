const express= require("express");
const mongoose = require("mongoose");

const workSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
        trim:true
    },
    companyLogo: String,
    designation: {
        type: String,
        required: true,
        trim:true
    },
    workLocation: String,
    workDuration: { start: String, end: String },
});

const WorkModel = new mongoose.model("Work",workSchema)

module.exports = WorkModel;