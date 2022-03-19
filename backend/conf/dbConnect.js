const mongoose = require("mongoose");
const dbUri = require("./appEnv").DB_URI;

mongoose.connection.on("open", function (ref) {
  console.log("Connected to mongo server.");
});

mongoose.connection.on("error", function (err) {
  console.log("Could not connect to mongo server!");
  console.log(err);
});

async function connnectDb() {
  mongoose.connect(dbUri);
}

module.exports = { connnectDb };
