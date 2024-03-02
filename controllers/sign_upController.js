const User = require("../models/user");
const { body, validationResult } = require("express-validator");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

exports.sign_up_get = async (req, res, next) => {
  try {
    res.render("sign_up");
  } catch (err) {
    return next(err);
  }
};

exports.sign_up_post = [
  body("first_name").trim().isLength({ min: 1 }).escape(),
  body("last_name").trim().isLength({ min: 1 }).escape(),
  body("username").trim().isLength({ min: 1 }).escape(),
  body("password")
    .trim()
    .isLength({ min: 3 })
    .escape()
    .withMessage("Password must have at least 3 characters"),
  body("passwordConfirmation")
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage("Passwords didn't match."),

  async (req, res, next) => {
    try {
      const errors = validationResult(req);

      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        password: hashedPassword,
        membership_status: false,
        admin: false,
      });

      if (!errors.isEmpty()) {
        res.render("sign_up", {
          user: user,
          errors: errors.array(),
        });
        return;
      }

      const existsUser = await User.findOne({
        username: req.body.username,
      }).exec();

      if (existsUser) {
        res.render("sign_up", {
          user: user,
          errors: ["This user already exists, please change your username"],
        });
        return;
      } else {
        await user.save();
        res.redirect("/");
      }
    } catch (err) {
      return next(err);
    }
  },
];
