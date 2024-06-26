const express = require("express");
const router = new express.Router();
const UserModel = require("../models/users")

router.post("/users", async (req, res)=>{
    try{
        const addRecord = new UserModel(req.body)
        const addUser = await addRecord.save();
        res.send(addUser);
    }catch(e){
        res.status(400).send(e);
    }
    })
    
    
    //list user
    router.get("/users", async (req, res)=>{
        try{
            const getUser = await UserModel.find({});
            res.send(getUser);
        }catch(e){
            res.status(400).send(e);
        }
        })
    
    
    
    //get user
    router.get("/users/:id", async (req, res)=>{
        try{
            const _id = req.params.id
            const getUser = await UserModel.findById(_id);
            res.send(getUser);
        }catch(e){
            res.status(400).send(e);
        }
        })
    
    //update user
    router.patch("/users/:id", async (req, res)=>{
        try{
            const _id = req.params.id
            const getUser = await UserModel.findByIdAndUpdate(_id, req.body, {
                    new: true
            });
            res.send(getUser);
        }catch(e){
            res.status(500).send(e);
        }
        })
    
    //delete user
    router.delete("/users/:id", async (req, res)=>{
        try{
            const _id = req.params.id
            const getUser = await UserModel.findByIdAndDelete(_id);
            res.send(getUser);
        }catch(e){
            res.status(500).send(e);
        }
        })
    
    
    module.exports = router;