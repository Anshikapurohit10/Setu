const express = require("express");
const auth = require("../middleware/auth");
const requireRole = require("../middleware/roles");
const Attendance = require("../models/Attendance");
const Timeline = require("../models/Timeline");
const router = express.Router();

// Teacher marks attendance (bulk)
router.post("/mark", auth, requireRole(["teacher","admin"]), async (req, res) => {
  try {
    // expected: [{studentId, subject, date, status}, ...]
    const records = req.body.records;
    if (!Array.isArray(records)) return res.status(400).json({ message: "Invalid payload" });

    // Bulk attendance insert/update
    const ops = records.map(r => ({
      updateOne: {
        filter: { student: r.studentId, subject: r.subject, date: new Date(r.date) },
        update: { $set: { student: r.studentId, subject: r.subject, date: new Date(r.date), status: r.status } },
        upsert: true
      }
    }));
    await Attendance.bulkWrite(ops);

    // Add timeline entries
    const timelineEntries = records.map(r => ({
      user: r.studentId,
      type: "attendance",
      description: `You were marked ${r.status} in ${r.subject} on ${new Date(r.date).toDateString()}`
    }));
    await Timeline.insertMany(timelineEntries);

    res.json({ success: true, message: "Attendance recorded and timeline updated" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Student: get attendance summary (by subject)
router.get("/summary", auth, requireRole("student"), async (req, res) => {
  try {
    const studentId = req.user._id;
    const pipeline = [
      { $match: { student: studentId } },
      { $group: {
          _id: "$subject",
          total: { $sum: 1 },
          present: { $sum: { $cond: [{ $eq: ["$status","present"] }, 1, 0] } }
        }
      },
      { $project: {
          subject: "$_id",
          total: 1,
          present: 1,
          percentage: { $multiply: [{ $divide: ["$present","$total"] }, 100] }
        }
      }
    ];
    const resu = await Attendance.aggregate(pipeline);
    res.json({ success: true, data: resu });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
