const AWS = require("aws-sdk");
require("dotenv").config();

const s3 = new AWS.S3({
  endpoint: "https://s3.filebase.com",
  region: "us-east-1",
  signatureVersion: "v4",
  accessKeyId: process.env.FILEBASE_KEY,
  secretAccessKey: process.env.FILEBASE_SECRET
});

module.exports = s3;
