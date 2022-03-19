const express = require("express");
const app = express();
const appEnv = require("./conf/appEnv");
const dbConnect = require("./conf/dbConnect");
const userModel = require("./models/User");
const cors = require("cors");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

dbConnect.connnectDb();
app.use(cors());

app.get("/new-user", async (req, res) => {
  let resp = await userModel.create({
    name: "Random name 2",
    api_key: uuidv4() + uuidv4(),
  });
  res.send({ status: true, data: resp });
});

__dirname = path.resolve();

if (appEnv.ENVIRONMENT === "production") {
  app.use(express.static(path.join(__dirname, "web/build")));

  app.get("*", async (req, res) => {
    app.sendFile(path.resolve(__dirname, "web", "build", "index.html"));
  });
} else {
  app.get("*", async (req, res) => {
    let resp = "This is local environment";
    res.send({ status: true, data: resp });
  });
}

app.listen(appEnv.PORT, () => {
  console.log("Backend server started at " + appEnv.PORT);
});
