require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
 
 // routes
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");
const attendanceRoutes = require("./routes/attendance");
const assignmentRoutes = require("./routes/assignment");
const submissionRoutes = require("./routes/submission");
const activityRoutes = require("./routes/activity");
const timelineRoutes = require("./routes/timeline");
const adminRoutes = require("./routes/admin");


const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(rateLimit({ windowMs: 60 * 1000, max: 120 }));
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// Database connect
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// Routes
 
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/assignment", assignmentRoutes);
app.use("/api/submissions", submissionRoutes);//
app.use("/api/activities", activityRoutes);//
app.use("/api/timeline", timelineRoutes);
app.use("/api/admin", adminRoutes);//

// Health check
app.get("/", (req, res) => {
  res.send(" Smart Student Hub Backend Running...");
});

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on  http://localhost:${PORT}`));
