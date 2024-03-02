var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Message = require("../models/message");
/* GET home page. */
router.get("/", async (req, res, next) => {
  try {
    const messages = await Message.find().exec();
    console.log(messages);
    res.render("index", { title: "Express", user: req.user });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
