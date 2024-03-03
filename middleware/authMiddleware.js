exports.isUnauthSign = (req, res, next) => {
  if (req.isUnauthenticated()) {
    next();
  } else {
    res.render("unautherized_sign", {
      title: "You are already logged in",
      text: "First logout",
    });
  }
};

exports.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.send("My friend you should not be here");
  }
};
