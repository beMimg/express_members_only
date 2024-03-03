const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/", (req, res, next) => {
  if (req.isAuthenticated()) {
    // Using req.logout with a callback function
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  } else {
    res.send("<h1> You are not logged in </h1>");
  }
});

module.exports = router;
