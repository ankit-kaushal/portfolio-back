const express = require("express");
const router = new express.Router();
const ProjectModel = require("../models/projects")

router.post("/projects", async (req, res)=>{
    try{
        const addRecord = new ProjectModel(req.body)
        const addProject = await addRecord.save();
        res.send(addProject);
    }catch(e){
        res.status(400).send(e);
    }
    })
    
    
    //list user
    router.get("/projects", async (req, res)=>{
        try{
            const getProject = await ProjectModel.find({});
            res.send(getProject);
        }catch(e){
            res.status(400).send(e);
        }
        })
    
    
    
    //get user
    router.get("/projects/:id", async (req, res)=>{
        try{
            const _id = req.params.id
            const getProject = await ProjectModel.findById(_id);
            res.send(getProject);
        }catch(e){
            res.status(400).send(e);
        }
        })
    
    //update user
    router.patch("/projects/:id", async (req, res)=>{
        try{
            const _id = req.params.id
            const getProject = await ProjectModel.findByIdAndUpdate(_id, req.body, {
                    new: true
            });
            res.send(getProject);
        }catch(e){
            res.status(500).send(e);
        }
        })
    
    //delete user
    router.delete("/projects/:id", async (req, res)=>{
        try{
            const _id = req.params.id
            const getProject = await ProjectModel.findByIdAndDelete(_id);
            res.send(getProject);
        }catch(e){
            res.status(500).send(e);
        }
        })
    
    
    module.exports = router;