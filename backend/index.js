// importing the necessary packages and file
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const useragent = require('express-useragent');
const router = require("./App/router");

// making server variable use the followings
const server = express();
server.use(cors());
server.use(express.json());
server.use(useragent.express());
server.use(router);
server.use("/Uploads/Cart", express.static("Uploads/Cart"));
server.use("/Uploads/Category", express.static("Uploads/Category"));
server.use("/Uploads/Order", express.static("Uploads/Order"));
server.use("/Uploads/Products", express.static("Uploads/Products"));
server.use("/Uploads/Slider", express.static("Uploads/Slider"));
server.use("/Uploads/SubCategory", express.static("Uploads/SubCategory"));

// connecting mongoose database named myntra
mongoose.connect('mongodb://127.0.0.1:27017/myntra') // 'mongodb://192.168.29.128:27017/myntra'
  .then(() => {
    server.listen("1323");
    console.log('Connected!');
  });