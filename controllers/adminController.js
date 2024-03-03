const mongoose = require("mongoose");
require("dotenv").config();
const Message = require("../models/message");
const User = require("../models/user");

exports.admin_get = (req, res, next) => {
  try {
    res.render("membership", {
      user: req.user,
      title: "Become an Admin",
      desc: "Admins must have a code",
    });
  } catch (err) {
    return next(err);
  }
};

exports.admin_post = async (req, res, next) => {
  try {
    if (req.body.secret_code !== process.env.ADMIN_SECRET) {
      res.render("membership", {
        user: req.user,
        title: "Become an Admin",
        desc: "Admins must have a code",
        errors: ["This code is incorrect"],
      });
      return;
    }
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { admin: true },
      {}
    );
    await user.save();
    res.redirect("/dashboard");
  } catch (err) {
    return next(err);
  }
};

exports.admin_delete_get = async (req, res, next) => {
  try {
    const message = await Message.findById(req.params.id)
      .populate("author")
      .exec();
    res.render("admin_delete", { user: req.user, message: message });
  } catch (err) {
    return next(err);
  }
};

exports.admin_delete_post = async (req, res, next) => {
  try {
    await Message.findByIdAndDelete(req.body.message_id);
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
};
