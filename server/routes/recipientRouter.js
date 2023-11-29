const Router = require("express");
const router = new Router();
const recipientController = require("../controllers/recipientController");

router.post("/", recipientController.create);
router.get("/", recipientController.getAll);

module.exports = router;
