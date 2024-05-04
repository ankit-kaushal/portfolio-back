const express= require("express");
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true,
        trim:true
    },
    projectDescription: String,
    projectLink: String,
    projectGitHub: String,
    projectType: String,
    mainStack: String,
});

const ProjectModel = new mongoose.model("Project",projectSchema)

module.exports = ProjectModel;