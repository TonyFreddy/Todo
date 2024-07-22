const express = require('express');
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

// SIGN UP
router.post("/registrer", async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashpassword = bcrypt.hashSync(password, 10);
        const user = new User({ email, username, password: hashpassword });
        await user.save();
        res.status(201).json({ message: "Sign up Successful" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// SIGN IN 
router.post("/signin", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ message: "Please Sign Up First" });
        }
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Password Is Not Correct" });
        }
        const { password, ...others } = user._doc;
        res.status(200).json({ user: others });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
