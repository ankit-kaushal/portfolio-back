const express = require("express");
const router = new express.Router();
const UserData = require("../models/users");
const ProjectData = require("../models/projects");
const WorkData = require("../models/works");

router.get("/", async (req, res) => {
    try {
        const getUsers = await UserData.findOne({}, { _id: 0, createdAt: 0, updatedAt: 0 }).sort({ updatedAt: -1 });
        const getProjects = await ProjectData.find();
        const getWorks = await WorkData.find();
        res.json({ user: getUsers, projects: getProjects, works: getWorks });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;