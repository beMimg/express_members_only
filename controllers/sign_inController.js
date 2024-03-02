const passport = require("passport");

exports.sign_in_get = async (req, res, next) => {
  try {
    res.render("sign_in");
  } catch (err) {
    return next(err);
  }
};

exports.sign_in_post = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/sign-in",
});
