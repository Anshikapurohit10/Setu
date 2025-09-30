const express = require("express");
const auth = require("../middleware/auth");
const requireRole = require("../middleware/roles");
const Submission = require("../models/Submission");
const Assignment = require("../models/Assignment");
const Timeline = require("../models/Timeline");
const upload = require("../middleware/upload");
const { uploadBuffer } = require("../utils/cloudinary");

const router = express.Router();

// Student submit (attachments via multipart/form-data)
// fields: answers, assignmentId
router.post("/", auth, requireRole("student"), upload.array("files", 5), async (req, res) => {
  try {
    const { answers, assignmentId } = req.body;
    const assignment = await Assignment.findById(assignmentId);
    if (!assignment) return res.status(404).json({ message: "Assignment not found" });

    // upload files to cloud
    const files = [];
    if (req.files && req.files.length) {
      for (const f of req.files) {
        const url = await uploadBuffer(f.buffer, `submissions/${assignmentId}`);
        files.push(url);
      }
    }

    const submission = await Submission.findOneAndUpdate(
      { assignment: assignmentId, student: req.user._id },
      { answers, attachments: files, submittedAt: new Date(), status: "submitted" },
      { upsert: true, new: true }
    );

    // timeline
    await Timeline.create({ user: req.user._id, type: "submission", refId: submission._id, message: `Submitted assignment ${assignment.title}`, meta: { assignmentId } });

    res.json({ success: true, submission });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

// Teacher grade
router.put("/:id/grade", auth, requireRole(["teacher","admin"]), async (req, res) => {
  try {
    const { marks, feedback } = req.body;
    const submission = await Submission.findById(req.params.id);
    if (!submission) return res.status(404).json({ message: "Submission not found" });

    submission.marks = marks;
    submission.feedback = feedback;
    submission.status = "graded";
    await submission.save();

    // timeline for student
    await Timeline.create({ user: submission.student, type: "submission", refId: submission._id, message: `Your submission graded`, meta: { marks } });

    res.json({ success: true, submission });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

module.exports = router;
