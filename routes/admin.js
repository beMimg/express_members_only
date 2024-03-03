const express = require("express");
const router = express.Router();
const { isAuth, isNotAdmin, isAdmin } = require("../middleware/authMiddleware");
const admin_Controller = require("../controllers/adminController");

router.get("/", isAuth, isNotAdmin, admin_Controller.admin_get);

router.post("/", isAuth, isNotAdmin, admin_Controller.admin_post);

router.get(
  "/message/:id/delete",
  isAuth,
  isAdmin,
  admin_Controller.admin_delete_get
);

router.post(
  "/message/:id/delete",
  isAuth,
  isAdmin,
  admin_Controller.admin_delete_post
);

module.exports = router;
