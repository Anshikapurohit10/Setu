const mongoose = require("mongoose");

const SubmissionSchema = new mongoose.Schema({
  assignment: { type: mongoose.Schema.Types.ObjectId, ref: "Assignment", required: true, index: true },
  student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
  answers: String, // short text answer
  attachments: [String], // cloud URLs for images or files
  submittedAt: { type: Date, default: Date.now },
  marks: { type: Number, default: null },
  feedback: String,
  status: { type: String, enum: ["submitted", "graded", "resubmitted"], default: "submitted" }
});

SubmissionSchema.index({ assignment: 1, student: 1 }, { unique: true });

module.exports = mongoose.model("Submission", SubmissionSchema);
