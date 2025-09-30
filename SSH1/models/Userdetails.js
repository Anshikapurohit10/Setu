 
const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
  collegeId: { type: String, required: true },
  collegeName: { type: String, required: true },
  rollNumber: { type: String, required: true },
  semester: { type: String }, // only for students
  phone: { type: String, required: true },
  role: { type: String, enum: ["student", "teacher", "admin"], required: true },
  approved: { type: Boolean, default: false }, // to mark teacher/admin approval
}, { timestamps: true });

module.exports = mongoose.model("Profile", ProfileSchema);
