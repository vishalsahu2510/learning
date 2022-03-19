const express = require("express");
const app = express();
const appEnv = require("./conf/appEnv");
const dbConnect = require("./conf/dbConnect");
const userModel = require("./models/User");

dbConnect.connnectDb();

app.get("*", async (req, res) => {
  let resp = await userModel.create({
    name: "Random name",
  });
  res.send({ status: true, resp: resp });
});

app.listen(appEnv.PORT, () => {
  console.log("Backend server started at " + appEnv.PORT);
});
