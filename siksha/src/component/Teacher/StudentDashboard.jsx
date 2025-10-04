
import React 
// { useEffect, useState } 
 from 'react'
import "./studentDash.css"
import { Link } from "react-router-dom";
import welcomeImg from "../../assets/WhatsApp Image 2025-09-19 at 9.35.00 PM.jpeg";
import progressImg from "../../assets/WhatsApp Image 2025-09-19 at 9.31.17 PM.jpeg";
import assignmentImg from "../../assets/WhatsApp Image 2025-09-19 at 9.34.22 PM.jpeg";
import activityImg from "../../assets/WhatsApp Image 2025-09-19 at 9.34.12 PM.jpeg";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, Legend, ResponsiveContainer } from "recharts";
export default function StudentDashboard() {
    const performanceData = [
    { name: "Performance", value: 60 },
    { name: "Remaining", value: 40 },
  ];
  const COLORS = ["#4952ce", "#e0e0e0"]; 
  const attendanceData = [
  { subject: "TOC", percentage: 25 },
  { subject: "IWT", percentage: 75 },
  { subject: "DBMS", percentage: 55 },
  { subject: "DS", percentage: 62 },
  { subject: "ML", percentage: 93 },
];

  return (
    <div className="dashboard">
      {/* Left center area */}
      <div className="center-section">
        <div className="welcome-card">
          <div>

            <h2>Hello Student!</h2>

            <p>
              You have <b>1 new work</b>. You have to finish it by tomorrow.{" "}
              <span className="link">View</span>
            </p>
          </div>
          <img
            src={welcomeImg}
            alt="students"
          />
        </div>

        <div className="grid-cards">
          <div className="card">My Progress
            <img
            src={progressImg}
            alt="students"
          />
          </div>
          <div to="/student/StudentAssignment" className="card">
  <div>
    <h3>Assignments</h3>
    <p>Click to view all your assignments</p>
    <img
          src={assignmentImg}
          alt="students"
        />
  </div>
</div>

          
            <div className="card performance">
            <h3>Performance</h3>
            <ResponsiveContainer width={120} height={120}>
              <PieChart>
                <Pie
                  data={performanceData}
                  innerRadius={40}
                  outerRadius={60}
                  paddingAngle={5}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270} // so it starts from top
                >
                  {performanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="circle-text">60%</div>
          </div>

          <div className="card attendance">
  <h3>Attendance</h3>
  <ResponsiveContainer width="100%" height={200}>
    <BarChart
      data={attendanceData}
      layout="horizontal" // vertical bars with subjects
      margin={{ top: 20, right: 20, left: 20, bottom: 20}}
    >
      <YAxis type="number" domain={[0, 100]} hide /> {/* hides x-axis */}
      <XAxis type="category" dataKey="subject" width={60} />
      <Tooltip formatter={(value) => `${value}%`} />
      <Bar
        dataKey="percentage"
        fill="#4952ce"
        barSize={20}
        label={{ position: "right", formatter: (value) => `${value}%` }}
      />
    </BarChart>
  </ResponsiveContainer>
</div>

          <div className="card upcoming">
            <h3>NEW Activity</h3>
             <div className="upcoming-box">
              <span className="dot">  </span>
            <p>
              There’s a badminton match next week. If you’re interested, register
              yourself.
            </p>
            <img
            src={activityImg}
            alt="students"
          />
          </div>
          </div>
        </div>
      </div>

      {/* Right side activity */}
      <div className="right-section">
        <div className="my-activity">
      <h3 className="title">My Activity</h3>

      {/* Month & Year Dropdown */}
      <div className="dropdowns">
        <select>
          <option>Sep</option>
          <option>Oct</option>
          <option>Nov</option>
        </select>
        <select>
          <option>2025</option>
          <option>2024</option>
          <option>2023</option>
        </select>
      </div>

      {/* Timeline */}
      <div className="timeline">
        <div className="timeline-item">
          <span className="time">02:30 pm</span>
          <div className="dot"></div>
          <p></p>
        </div>

        <div className="timeline-item">
          <span className="time">01:00 pm</span>
          <div className="dot"></div>
          <p></p>
        </div>

        <div className="timeline-item">
          <span className="time">11:30 am</span>
          <div className="dot"></div>
          <p>Completed your lecture</p>
        </div>

        <div className="timeline-item">
          <span className="time">09:00 am</span>
          <div className="dot"></div>
          <p>You have submitted your TOC assignment</p>
        </div>
      </div>
    </div>

         
      </div>
   
    </div>
  );
}
