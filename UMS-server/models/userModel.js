const mongoose = require("mongoose");
const { model } = mongoose;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const users = model("users", userSchema);

module.exports = users;
