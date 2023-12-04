const Router = require("express");
const router = new Router();

const userRouter = require("./userRouter");
const recipientRouter = require("./recipientRouter");

router.use("/user", userRouter);
router.use("/recipient", recipientRouter);

module.exports = router;
