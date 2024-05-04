const express = require("express");
const router = new express.Router();
const WorkModel = require("../models/works")

router.post("/work", async (req, res)=>{
    try{
        const addRecord = new WorkModel(req.body)
        const addWork = await addRecord.save();
        res.send(addWork);
    }catch(e){
        res.status(400).send(e);
    }
    })
    
    
    //list user
    router.get("/work", async (req, res)=>{
        try{
            const getWork = await WorkModel.find({});
            res.send(getWork);
        }catch(e){
            res.status(400).send(e);
        }
        })
    
    
    
    //get user
    router.get("/work/:id", async (req, res)=>{
        try{
            const _id = req.params.id
            const getWork = await WorkModel.findById(_id);
            res.send(getWork);
        }catch(e){
            res.status(400).send(e);
        }
        })
    
    //update user
    router.patch("/work/:id", async (req, res)=>{
        try{
            const _id = req.params.id
            const getWork = await WorkModel.findByIdAndUpdate(_id, req.body, {
                    new: true
            });
            res.send(getWork);
        }catch(e){
            res.status(500).send(e);
        }
        })
    
    //delete user
    router.delete("/work/:id", async (req, res)=>{
        try{
            const _id = req.params.id
            const getWork = await WorkModel.findByIdAndDelete(_id);
            res.send(getWork);
        }catch(e){
            res.status(500).send(e);
        }
        })
    
    
    module.exports = router;