const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
  date: { type: Date, required: true, index: true },
  subject: { type: String, required: true, index: true },
  status: { type: String, enum: ["present", "absent", "leave"], required: true },
  createdAt: { type: Date, default: Date.now }
});

AttendanceSchema.index({ student: 1, subject: 1, date: 1 }, { unique: true });

module.exports = mongoose.model("Attendance", AttendanceSchema);
