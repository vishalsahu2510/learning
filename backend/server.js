const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 1234;

app.get("*", (req, res) => {
  res.send("Backend running");
});

console.log(PORT);

app.listen(PORT, () => {
  console.log("Backend server started at " + PORT);
});
