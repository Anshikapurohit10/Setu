const mongoose = require("mongoose");

const TimelineSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
  type: { type: String, enum: ["attendance","assignment","submission","activity","achievement","system"], required: true },
  refId: { type: mongoose.Schema.Types.ObjectId }, // reference to document
  message: String,
  meta: Object, // arbitrary JSON for frontend
  createdAt: { type: Date, default: Date.now, index: true }
});

module.exports = mongoose.model("Timeline", TimelineSchema);
