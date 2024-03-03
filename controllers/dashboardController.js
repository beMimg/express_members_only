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
