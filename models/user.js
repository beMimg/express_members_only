const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  membership_status: { type: String, default: "none" },
  creation: { type: Date, default: Date.now() },
});

UserSchema.virtual("complete_name").get(function () {
  return this.first_name.concat(" ", this.last_name);
});

UserSchema.virtual("url").get(function () {
  return `/user/${this.user._id}`;
});

module.exports = mongoose.model("User", UserSchema);
