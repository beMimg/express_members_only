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
