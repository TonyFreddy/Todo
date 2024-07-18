const express = require('express');
const router = express.Router();
const User = require("../models/user");
const List = require("../models/list");


//create
router.post("/addTask", async (req, res) => {
    try {
        const { title, body, email } = req.body;
        
        if (!title || !body || !email) {
            return res.status(400).json({ error: "Title, body, and email are required." });
        }

        const existingUser = await User.findOne({ email });
        
        if (existingUser) {
            const list = new List({ title, body, user: existingUser._id });
            await list.save();
            
            existingUser.list.push(list._id);
            await existingUser.save();
            
            return res.status(200).json({ list });
        } else {
            return res.status(404).json({ error: "User not found." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

// update 
router.put("/updateTask/:id", async (req, res) => {
    try {
        const { title, body, email } = req.body;
        
        if (!title || !body || !email) {
            return res.status(400).json({ error: "Title, body, and email are required." });
        }

        const existingUser = await User.findOne({ email });
        
        if (existingUser) {
           const list = await List.findByIdAndUpdate(req.params.id, {title , body});
           list.save().then(()=> res.status(200).json({message: "task updated"}));
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

// delete 
router.delete("/deleteTask/:id", async (req, res) => {
    try {
        const { email } = req.body;
        
        if ( !email) {
            return res.status(400).json({ error: "email is required." });
        }

        const existingUser = await User.findOneAndUpdate(
            {email},
            {$pull: { list: req.params.id}}
        );
        
        if (existingUser) {
           const list = await List.findByIdAndDelete(req.params.id).then(()=> 
            res.status(200).json({message: "task deleted"}));
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

// get 
router.get("/getTasks/:id", async(req,res)=>{
    const list = await List.find({ user: req.params.id }).sort({ createdAt: -1});
    
    if (list.length !== 0)
    {
        res.status(200).json({ list:list });
    }
    else
    {
        res.status(200).json({message: "No tasks" });
    }
});

module.exports = router;
