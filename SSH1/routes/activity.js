const express = require("express");
const auth = require("../middleware/auth");
const requireRole = require("../middleware/roles");
const Activity = require("../models/Activity");
const Timeline = require("../models/Timeline");
const upload = require("../middleware/upload");
const { uploadBuffer } = require("../utils/cloudinary");

const router = express.Router();

// Student create activity with proof files
router.post("/", auth, requireRole("student"), upload.array("proof", 5), async (req, res) => {
  try {
    const { title, description, category, dateOfEvent } = req.body;
    const files = [];
    if (req.files && req.files.length) {
      for (const f of req.files) {
        const url = await uploadBuffer(f.buffer, `activities/${req.user._id}`);
        files.push(url);
      }
    }
    const act = await Activity.create({
      student: req.user._id,
      title,
      description,
      category,
      dateOfEvent,
      proof: files
    });

    await Timeline.create({ user: req.user._id, type: "activity", refId: act._id, message: `Added activity: ${title}`, meta: { category }});

    res.status(201).json({ success: true, act });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

// Student get own activities
router.get("/mine", auth, async (req, res) => {
  const acts = await Activity.find({ student: req.user._id }).sort({ createdAt: -1 });
  res.json({ success: true, acts });
});

module.exports = router;
