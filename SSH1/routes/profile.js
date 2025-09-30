const express = require("express");
const auth = require("../middleware/auth");
const Profile = require("../models/Profile");
const router = express.Router();

// create or update profile
router.post("/", auth, async (req, res) => {
  try {
    const { collegeId, collegeName, rollNumber, semester, phone, role, department } = req.body;
    let profile = await Profile.findOne({ user: req.user._id });
    if (profile) {
      Object.assign(profile, { collegeId, collegeName, rollNumber, semester, phone, role, department });
      await profile.save();
    } else {
      profile = await Profile.create({ user: req.user._id, collegeId, collegeName, rollNumber, semester, phone, role, department });
    }
    res.json({ success: true, profile });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

// get my profile
router.get("/me", auth, async (req, res) => {
  const profile = await Profile.findOne({ user: req.user._id }).populate("user","name email role");
  if (!profile) return res.status(404).json({ message: "Profile not found" });
  res.json({ success: true, profile });
});

module.exports = router;
