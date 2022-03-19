const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const UserSchema = mongoose.Schema({
  name: String,
  api_key: {
    type: String,
    default: uuidv4() + uuidv4(),
  },
});

const User = mongoose.model("Users", UserSchema);
module.exports = User;
