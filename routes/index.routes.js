const express = require("express")
const router = express.Router()
const authMiddleware = require("../middlewares/auth")
const fileModel = require("../models/file.model")

router.get("/home",authMiddleware, async (req, res) => {
    const userFiles = await fileModel.find({ 
        userId: req.user.userId
    })
    
    res.render("home", { 
        files:userFiles 
    })
})

router.get("/download/:path", authMiddleware, async (req, res) => {
    const loggedInUSerId = req.user.userId
    const path  = req.params;
    const file = await fileModel.findOne({ 
        user: loggedInUSerId,
        path: path 
    });
    if (!file) {
        return res.status(404).send("File not found");
    }
    res.download(file.path);
})

module.exports = router