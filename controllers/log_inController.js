const passport = require("passport");

exports.log_in_get = async (req, res, next) => {
  try {
    res.render("log_in");
  } catch (err) {
    return next(err);
  }
};

exports.log_in_post = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/log-in",
});
