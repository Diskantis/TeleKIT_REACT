const Router = require("express");
const router = new Router();
const stateController = require("../controllers/stateController");

router.post("/", stateController.create);
router.get("/", stateController.getAll);

module.exports = router;