const express = require("express");
const router = express.Router();
const sign_upController = require("../controllers/sign_upController");

router.get("/", sign_upController.sign_up_get);
router.post("/", sign_upController.sign_up_post);

module.exports = router;
