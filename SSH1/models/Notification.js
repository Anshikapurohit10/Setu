const mongoose = require("mongoose");
const NotificationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
  title: String,
  body: String,
  read: { type: Boolean, default: false },
  meta: Object,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model("Notification", NotificationSchema);
