const mongoose = require("mongoose");
require("dotenv").config();

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
    console.log(req.body.secret_code);
    console.log(process.env.ADMIN_CODE);
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
