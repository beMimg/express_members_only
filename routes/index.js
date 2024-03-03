var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Message = require("../models/message");
/* GET home page. */
router.get("/", async (req, res, next) => {
  if (req.isUnauthenticated()) {
    try {
      const messages = await Message.find().exec();
      res.render("index", {
        title: "Express",
        user: req.user,
        messages: messages,
      });
    } catch (err) {
      return next(err);
    }
  } else {
    res.redirect("/dashboard");
  }
});

module.exports = router;
