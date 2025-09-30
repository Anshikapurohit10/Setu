const express = require("express");
const auth = require("../middleware/auth");
const requireRole = require("../middleware/roles");
const Profile = require("../models/Profile");
const Activity = require("../models/Activity");
const Timeline = require("../models/Timeline");

const router = express.Router();

// list profiles pending
router.get("/profiles/pending", auth, requireRole(["teacher","admin"]), async (req, res) => {
  const list = await Profile.find({ approved: false }).populate("user","name email role");
  res.json({ success: true, list });
});

// approve profile
router.put("/profiles/:id/approve", auth, requireRole(["teacher","admin"]), async (req, res) => {
  const profile = await Profile.findById(req.params.id);
  if (!profile) return res.status(404).json({ message: "Not found" });
  profile.approved = true; await profile.save();
  await Timeline.create({ user: profile.user, type: "system", message: "Profile approved" });
  res.json({ success: true, profile });
});

// approve activity
router.put("/activities/:id/approve", auth, requireRole(["teacher","admin"]), async (req, res) => {
  const activity = await Activity.findById(req.params.id);
  if (!activity) return res.status(404).json({ message: "Not found" });
  activity.status = "approved"; activity.approvedBy = req.user._id; activity.approvedAt = new Date(); await activity.save();
  await Timeline.create({ user: activity.student, type: "activity", refId: activity._id, message: "Activity approved" });
  res.json({ success: true, activity });
});

// reject activity
router.put("/activities/:id/reject", auth, requireRole(["teacher","admin"]), async (req, res) => {
  const activity = await Activity.findById(req.params.id);
  if (!activity) return res.status(404).json({ message: "Not found" });
  activity.status = "rejected"; await activity.save();
  await Timeline.create({ user: activity.student, type: "activity", refId: activity._id, message: "Activity rejected" });
  res.json({ success: true, activity });
});
router.get("/activities/pending", auth, requireRole(["teacher", "admin"]), async (req, res) => {

  try {

    const activities = await Activity.find({ status: "pending" })

      .populate("student", "name") // Populate student's name

      .sort({ createdAt: -1 });

    res.json({ success: true, list: activities });

  } catch (err) {

    res.status(500).json({ message: err.message });

  }

});

module.exports = router;
