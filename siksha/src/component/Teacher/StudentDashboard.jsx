
import React 
// { useEffect, useState } 
 from 'react'
import "./studentDash.css"
import { Link } from "react-router-dom";

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
// const [assignments, setAssignments] = useState([]);
// useEffect(() => {
//   const fetchAssignments = async () => {
//     try {
//       const token = localStorage.getItem("tresetu_token"); // your JWT stored in localStorage
//        if (!token) {
//         console.error("No token found. Please login.");
//         return;
//       }
//       const res = await fetch("http://localhost:5000/api/assignment", {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`, // ✅ send token
//         },
//       });
      
//       const data = await res.json();
//       console.log("Assignments fetched:", data.assignments);
//       if (data.success) setAssignments(data.assignments);
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   fetchAssignments();
// }, []);

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
            src="src/assets/WhatsApp Image 2025-09-19 at 9.35.00 PM.jpeg"
            alt="students"
          />
        </div>

        <div className="grid-cards">
          <div className="card">My Progress
            <img
            src="src/assets/WhatsApp Image 2025-09-19 at 9.31.17 PM.jpeg"
            alt="students"
          />
          </div>
          <div to="/student/StudentAssignment" className="card">
  <div>
    <h3>Assignments</h3>
    <p>Click to view all your assignments</p>
    <img
          src="src/assets/WhatsApp Image 2025-09-19 at 9.34.22 PM.jpeg"
          alt="students"
        />
  </div>
</div>

          {/* {assignments.map((a) => (
    <Link key={a._id} to={`/student/assignments/${a._id}`} className="card">
   <span>{a.title}</span>
      <p>{a.description}</p>
      {a.attachments &&
      a.attachments.map((file, index) => (
        <a
          key={index}
          href={`http://localhost:5000/uploads/${file}`}
          target="_blank"
          rel="noreferrer"
          style={{ display: "block", marginTop: "4px", color: "#4952ce", textDecoration: "underline" }}
        >
          {file}
        </a>
      ))}

        <img
          src="src/assets/WhatsApp Image 2025-09-19 at 9.34.22 PM.jpeg"
          alt="students"
        />
      
    </Link>
  ))} */}
             {/* <Link to="/student/StudentAssignments" className="card">
        <span>Assignments</span>
        <img
          src="src/assets/WhatsApp Image 2025-09-19 at 9.34.22 PM.jpeg"
          alt="students"
        />
      </Link> */}
          {/* <div className="card">Assignments
            <img
            src="src/assets/WhatsApp Image 2025-09-19 at 9.34.22 PM.jpeg"
            alt="students"
          />
          </div> */}
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
            src="src/assets/WhatsApp Image 2025-09-19 at 9.34.12 PM.jpeg"
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
