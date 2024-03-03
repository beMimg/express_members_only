const mongoose = require("mongoose");
const User = require("../models/user");
require("dotenv").config();

exports.membership_get = (req, res, next) => {
  try {
    res.render("membership", { user: req.user });
  } catch (err) {
    return next(err);
  }
};

exports.membership_post = async (req, res, next) => {
  try {
    if (req.body.secret_code !== process.env.MEMBER_SECRET) {
      res.render("membership", {
        user: req.user,
        errors: ["This code is incorrect"],
      });
      return;
    }

    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        membership_status: true,
      },
      {}
    );
    await user.save();
    res.redirect("/dashboard");
  } catch (err) {
    return next(err);
  }
};
