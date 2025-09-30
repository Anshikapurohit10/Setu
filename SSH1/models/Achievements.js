const mongoose = require("mongoose");

const AchievementSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  type: String,
  fileUrl: String,
  status: { type: String, enum: ["pending", "verified", "rejected"], default: "pending" },
  verifiedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

 


module.exports = mongoose.model("Achievement", AchievementSchema);