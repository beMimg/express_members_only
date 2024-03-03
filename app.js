var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const session = require("express-session");
const passport = require("passport");
var indexRouter = require("./routes/index");
const sign_inRouter = require("./routes/sign_in");
const sign_upRouter = require("./routes/sign_up");
const logoutRouter = require("./routes/logout");
const dashboardRouter = require("./routes/dashboard");
const membershipRouter = require("./routes/membership");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const MongoStore = require("connect-mongo");

// need to create connection to mongostore in seassion.
var app = express();

async function main() {
  try {
    console.log("trying connection to database");
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("should be conneted to database");
  } catch (err) {
    db.on("error", console.error.bind(console, "mongo connection error"));
  }
}
main();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);
require("./config/passport");
app.use(passport.session());

app.use("/", indexRouter);
app.use("/sign-up", sign_upRouter);
app.use("/sign-in", sign_inRouter);
app.use("/logout", logoutRouter);
app.use("/dashboard", dashboardRouter);
app.use("/membership", membershipRouter);
app.use("/admin", adminRouter);
app.use("/user", userRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
