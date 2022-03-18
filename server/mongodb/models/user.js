const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// mongoose.Schema new Schema could be replaced
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    reuired: true,
  },
  username: {
    type: String,
    reuired: true,
  },
  password: {
    type: String,
    reuired: true,
  },
  role: {
    type: String,
    enum: {
      values: ["Admin", "User"], // only this variables could work
      message: "(VALUE) is not supported",
    },
    default: "User",
  },
});

module.exports = mongoose.model("User", userSchema);
