const express = require("express");
const minionRouter = require("./routes/minions.js");
const ideasRouter = require("./routes/ideas.js");
const meetingsRoute = require("./routes/meetings.js");

const apiRouter = express.Router();
apiRouter.use("/minions", minionRouter);
apiRouter.use("/ideas", ideasRouter);
apiRouter.use("/meetings", meetingsRoute);

module.exports = apiRouter;
