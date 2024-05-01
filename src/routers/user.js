const express = require("express");
const router = new express.Router();
const UserData = require("../models/users")

router.post("/api/users", async (req, res)=>{
    try{
        const addRecord = new UserData(req.body)
        const addUser = await addRecord.save();
        res.send(addUser);
    }catch(e){
        res.status(400).send(e);
    }
    })
    
    
    //list user
    router.get("/api/users", async (req, res)=>{
        try{
            const getUser = await UserData.find({});
            res.send(getUser);
        }catch(e){
            res.status(400).send(e);
        }
        })
    
    
    
    //get user
    router.get("/api/users/:id", async (req, res)=>{
        try{
            const _id = req.params.id
            const getUser = await UserData.findById(_id);
            res.send(getUser);
        }catch(e){
            res.status(400).send(e);
        }
        })
    
    //update user
    router.patch("/api/users/:id", async (req, res)=>{
        try{
            const _id = req.params.id
            const getUser = await UserData.findByIdAndUpdate(_id, req.body, {
                    new: true
            });
            res.send(getUser);
        }catch(e){
            res.status(500).send(e);
        }
        })
    
    //delete user
    router.delete("/api/users/:id", async (req, res)=>{
        try{
            const _id = req.params.id
            const getUser = await UserData.findByIdAndDelete(_id);
            res.send(getUser);
        }catch(e){
            res.status(500).send(e);
        }
        })
    
    
    module.exports = router;