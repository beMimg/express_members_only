const mongoose = require("mongoose");

exports.dashboard_get = (req, res, next) => {
  try {
    res.render("dashboard", {
      user: req.user,
    });
  } catch (err) {
    return next(err);
  }
};
