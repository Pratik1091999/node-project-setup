const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {},
  { timestamps: true },
  { versionKey: false }
);

const User = mongoose.model("USER", UserSchema); 

module.exports = User;
