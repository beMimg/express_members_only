const express = require("express");
const router = express.Router();
const sign_upController = require("../controllers/sign_upController");
const { isUnauth } = require("../middleware/authMiddleware");

router.get("/", isUnauth, sign_upController.sign_up_get);
router.post("/", isUnauth, sign_upController.sign_up_post);

module.exports = router;
