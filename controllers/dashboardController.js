const mongoose = require("mongoose");
const Message = require("../models/message");

exports.dashboard_get = async (req, res, next) => {
  try {
    const messages = await Message.find().populate("author").exec();

    res.render("dashboard", {
      user: req.user,
      messages: messages,
    });
  } catch (err) {
    return next(err);
  }
};

exports.dashboard_message_post = async (req, res, next) => {
  try {
    const message = new Message({
      title: req.body.title,
      text: req.body.text,
      author: req.user._id,
    });

    await message.save();
    res.redirect("/dashboard");
  } catch (err) {
    return next(err);
  }
};
