const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");

const s3 = require("../config/filebase");
const File = require("../models/file.model");

const upload = multer({ dest: "temp/" });

router.post("/upload-file", upload.single("file"), async (req, res) => {
  try {
    const fileStream = fs.createReadStream(req.file.path);

    const params = {
      Bucket: process.env.FILEBASE_BUCKET,
      Key: `uploads/${Date.now()}-${req.file.originalname}`,
      Body: fileStream
    };

    // Upload to Filebase
    const data = await s3.upload(params).promise();

    // Save in MongoDB
    await File.create({
      filename: req.file.originalname,
      url: data.Location
    });

    // Remove temp file
    fs.unlinkSync(req.file.path);

    // Redirect back to home
    res.redirect("/home");

  } catch (err) {
    console.error("Upload Error:", err);
    res.status(500).send("File upload failed");
  }
});

module.exports = router;
