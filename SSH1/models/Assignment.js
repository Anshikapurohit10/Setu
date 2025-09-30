const mongoose = require("mongoose");

const AssignmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  course: String, // e.g., TOC, IWT...
  dueDate: Date,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // teacher
  attachments: [String], // cloud URLs
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model("Assignment", AssignmentSchema);
