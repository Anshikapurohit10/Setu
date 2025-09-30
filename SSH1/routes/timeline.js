const express = require("express");
const auth = require("../middleware/auth");
const Timeline = require("../models/Timeline");
const router = express.Router();

// get timeline for current user (paginated)
router.get("/", auth, async (req, res) => {
  const page = parseInt(req.query.page || "1");
  const limit = parseInt(req.query.limit || "20");
  const skip = (page - 1) * limit;
  const items = await Timeline.find({ user: req.user._id }).sort({ createdAt: -1 }).skip(skip).limit(limit);
  res.json({ success: true, items });
});

module.exports = router;
