const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//  users is the table of database

const UserModel = mongoose.model("clients", UserSchema);
module.exports = UserModel;
