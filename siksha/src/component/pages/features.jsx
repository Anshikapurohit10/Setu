import React from "react";
import "./features.css";
const Features = () => {
  return (
    <section className="section features">
      <div className="container">
        <h2>Core Features</h2>
        <div className="features-grid">
          <div className="card">
            <div className="icon">📊</div>
            <h3>Student Dashboard</h3>
            <p>Marks, Attendance, Assignments, Ranks, Alerts, AI ChatBox</p>
          </div>
          <div className="card">
            <div className="icon">📝</div>
            <h3>Alumni Mentor Connect</h3>
            <p>One-to-one + group mentorship</p>
          </div>
          <div className="card">
            <div className="icon">🏆</div>
            <h3>Achievements & Activities</h3>
            <p>Seminars, certifications, internships, volunteering</p>
          </div>
          <div className="card">
            <div className="icon">✅</div>
            <h3>Verified Portfolio</h3>
            <p>Auto-generated CVs & sharable digital records</p>
          </div>
          <div className="card">
            <div className="icon">📈</div>
            <h3>Smart Faculty Dashboard</h3>
            <p>Heatmaps, Alerts, Quiz/task generator</p>
          </div>
          <div className="card">
            <div className="icon">🔗</div>
            <h3>Gamified Leaderboards</h3>
            <p>Badges, Ranks, Skills recognition</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
