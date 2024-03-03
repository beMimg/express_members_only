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
    console.log(req.user);
    next();
  } else {
    res.send("My friend you should not be here");
  }
};

exports.isMember = (req, res, next) => {
  if (req.user.membership_status) {
    next();
  } else {
    res.redirect("/membership");
  }
};

exports.isNotMember = (req, res, next) => {
  if (!req.user.membership_status) {
    next();
  } else {
    res.send("You are a member already");
  }
};

exports.isNotAdmin = (req, res, next) => {
  if (!req.user.admin) {
    next();
  } else {
    res.send("You're an admin already");
  }
};

exports.isAdmin = (req, res, next) => {
  if (req.user.admin) {
    next();
  } else {
    res.send("You are not admin");
  }
};
