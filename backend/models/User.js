const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: String,
    api_key: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("Users", UserSchema);
module.exports = User;
