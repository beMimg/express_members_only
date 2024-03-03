const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

const UserSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  membership_status: { type: Boolean, required: true },
  admin: { type: Boolean, required: true },
  creation: { type: Date, default: Date.now() },
});

UserSchema.virtual("complete_name").get(function () {
  return this.first_name.concat(" ", this.last_name);
});

UserSchema.virtual("url").get(function () {
  return `/user/${this._id}`;
});

UserSchema.virtual("date").get(function () {
  return DateTime.fromJSDate(this.creation).toLocaleString(
    DateTime.DATETIME_MED
  );
});

module.exports = mongoose.model("User", UserSchema);
