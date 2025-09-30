const express = require("express");
const auth = require("../middleware/auth");
const requireRole = require("../middleware/roles");
const Assignment = require("../models/Assignment");
const Timeline = require("../models/Timeline");
const { uploadBuffer } = require("../utils/cloudinary");
const upload = require("../middleware/upload");
const router = express.Router();




// POST /api/assignments

// Teacher create assignment with attachments
router.post("/", auth, requireRole("teacher"), upload.array("attachment", 5), async (req, res) => {
  try {
    const { title, description ,start, dueDate, content } = req.body;
        // const title = title;
    const files =req.files ? req.files.map(f => f.filename) :  [];

    if (req.files && req.files.length) {
      for (const f of req.files) {
        const url = await uploadBuffer(f.buffer, `assignment/${req.user._id}`);
        files.push(url);
      }
    }
 const newAssignment = new Assignment({
      title,
      description,
      start: new Date(start),
      dueDate: new Date(dueDate),
      attachments: files,
      isActive: true,
       createdBy: req.user._id
    });

    await newAssignment.save();

    // const assignment = await Assignment.create({
     
    //   createdBy: req.user._id, // important: set teacher ID
    //   title,
    //   start,
    //   dueDate,
    //   content,
    //   attachments: files,
    //   isActive: true,
    // });

    // await Timeline.create({
    //   user: req.user._id,
    //   type: "assignment",
    //   refId: assignment._id,
    //   message: `Created assignment: ${title}`,
    // });

    res.status(201).json({ success: true, assignment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// Teacher get own assignments
router.get("/mine", auth, requireRole("teacher"), async (req, res) => {
  const assignments = await Assignment.find({ createdBy: req.user._id }).sort({ createdAt: -1 });
  res.json({ success: true, assignments });
});



// Create assignment (teacher)
// router.post("/", auth, requireRole(["teacher","admin"]), async (req, res) => {
//   try {
//     const payload = { ...req.body, createdBy: req.user._id };
//     const assignment = await Assignment.create(payload);
//     // optionally timeline for class or students
//     res.status(201).json({ success: true, assignment });
//   } catch (err) { res.status(500).json({ message: err.message }); }
// });

// Get active assignments (students)
// router.get("/", auth, async (req, res) => {
//   const assignments = await Assignment.find({ isActive: true }).sort({ dueDate: 1 });
//   res.json({ success: true, assignments });
// });
// routes/assignment.js

// Get active assignments (students)
router.get("/", auth, async (req, res) => {
  try {
    const assignments = await Assignment.find({ isActive: true })
      .sort({ dueDate: 1 })
      .select("title description start dueDate attachments"); // sirf ye fields bhejenge

    res.json({ success: true, assignments });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});


// Teacher update/delete - update
router.put("/:id", auth, requireRole(["teacher","admin"]), async (req, res) => {
  const assignment = await Assignment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!assignment) return res.status(404).json({ message: "Not found" });
  res.json({ success: true, assignment });
});

// Teacher delete (soft)
// router.delete("/:id", auth, requireRole(["teacher","admin"]), async (req, res) => {
//   const assignment = await Assignment.findByIdAndUpdate(req.params.id, { isActive: false }, { new: true });
//   res.json({ success: true, assignment });
// });
// Delete assignment
router.delete("/:id", auth, async (req, res) => {
  try {
    const assignment = await Assignment.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user._id   // ensure teacher can delete only their own assignment
    });
    if (!assignment) {
      return res.status(404).json({ success: false, message: "Assignment not found" });
    }
    res.json({ success: true, message: "Assignment deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Toggle active/inactive
router.patch("/:id/toggle", auth, async (req, res) => {
  try {
    const assignment = await Assignment.findOne({
      _id: req.params.id,
      createdBy: req.user._id
    });
    if (!assignment) {
      return res.status(404).json({ success: false, message: "Assignment not found" });
    }
    assignment.isActive = !assignment.isActive;
    await assignment.save();
    res.json({ success: true, assignment });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
module.exports = router;
