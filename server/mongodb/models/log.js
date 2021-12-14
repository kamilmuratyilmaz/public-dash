const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logSchema = new Schema({
  request: {
    type: Object,
  },
  requestDate: {
    type: Date,
    default: Date.now(), // For evade sending external date data
  },
});

module.exports = mongoose.model("Log", logSchema);
