const Router = require("express");
const router = new Router();

const userRouter = require("./userRouter");

const recipientRouter = require("./recipientRouter");
const departmentRouter = require("./departmentRouter");
// const stateRouter = require("./stateRouter");
// const phoneRouter = require("./phoneRouter");

router.use("/user", userRouter);
router.use("/recipient", recipientRouter);
router.use("/department", departmentRouter);
// router.use("/state", stateRouter);
// router.use("/phone", phoneRouter);

module.exports = router;
