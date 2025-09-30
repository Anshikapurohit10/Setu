const mongoose = require("mongoose");
 

const MarksSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  subject: String,
  marks: Number,
  attendance: Number,
  semester: Number
});



module.exports = mongoose.model("Score", MarksSchema);