const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
  title: { type: String, required: true },
  description: String,
  category: { type: String, enum: ["hackathon","event","volunteer","certificate","other"], default: "other" },
  dateOfEvent: Date,
  proof: [String], // cloud URLs (images, pdfs)
  status: { type: String, enum: ["pending","approved","rejected"], default: "pending" },
  points: { type: Number, default: 0 }, // optional scoring
  createdAt: { type: Date, default: Date.now },
  approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // teacher/admin who approved
  approvedAt: Date
});

module.exports = mongoose.model("Activity", ActivitySchema);
