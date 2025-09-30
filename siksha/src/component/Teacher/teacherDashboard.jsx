import { useState, useEffect } from "react";
import "./teacher.css";
import axios from "axios";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function TeacherDashboard() {
  const [pendingRequests, setPendingRequests] = useState([]);
  const [teacherName, setTeacherName] = useState("");

  // 1️⃣ Teacher ka naam backend se fetch karna
  useEffect(() => {
    axios
      .get("https://setu-h683.onrender.com/api/profile/me", { withCredentials: true })
      .then((res) => {
        setTeacherName(res.data.user.name);
      })
      .catch((err) => console.error(err));
  }, []);

  // 2️⃣ Dummy pending requests (ab alag useEffect)
  useEffect(() => {
    setPendingRequests([
      { id: 1, student: "Rahul", course: "CS", semester: "5th" },
      { id: 2, student: "Anita", course: "IT", semester: "8th" },
      { id: 4, student: "Khushi", course: "ECE", semester: "5th" },
      { id: 5, student: "Anshika", course: "ECE", semester: "5th" },
      { id: 6, student: "Pranav", course: "ECE", semester: "5th" },
      { id: 7, student: "Saket", course: "ECE", semester: "5th" },
    ]);
  }, []);

  // Chart data
  const assessmentData = [
    { name: "Submitted", value: 60 },
    { name: "Pending", value: 40 },
  ];

  const participationData = [
    { name: "Hackathon", value: 800 },
    { name: "Seminars", value: 500 },
    { name: "Sports", value: 550 },
    { name: "Debate", value: 350 },
    { name: "Fest", value: 600 },
    { name: "Internship", value: 250 },
  ];

  const COLORS = ["#454DB4", "#B5B9E9"];

  return (
    <div className="teacher-dashboard">
      <div className="main-content">
        {/* LEFT SECTION */}
        <div className="left-panel">
          <div className="card greeting">
            <div className="greeting-content">
              <div className="text">
                <h2>Hello {teacherName} 👋</h2>
              </div>
            </div>
          </div>

          {/* Assessment */}
          <div className="card">
            <h3>Assessment</h3>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={assessmentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={65}
                    outerRadius={95}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {assessmentData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Legend verticalAlign="bottom" layout="horizontal" />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Student Participation */}
          <div className="card">
            <h3>Student Participation</h3>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={participationData} barSize={40}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#4F46E5" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Student Activity */}
          <div className="card student-activity">
            <h3>Student Activity</h3>
            <div className="activity-list">
              <div className="activity-item">
                <span className="icon">📄</span>
                <p>Rahul has submitted his assignment.</p>
              </div>
              <div className="activity-item">
                <span className="icon">📄</span>
                <p>Vidhi has submitted her assignment.</p>
              </div>
              <div className="activity-item">
                <span className="icon">📄</span>
                <p>Riya has submitted her assignment.</p>
              </div>
              <div className="activity-item">
                <span className="icon">📄</span>
                <p>Siya has submitted her assignment.</p>
              </div>
              <div className="activity-item">
                <span className="icon">📄</span>
                <p>Ram has submitted his assignment.</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="right-panel">
          <div className="header">
            <h3>Pending Requests</h3>
            <div className="date-row">
              <span>18 Sep 2025</span>
              <button className="today-btn">Today</button>
            </div>
          </div>

          <div className="timeline">
            {pendingRequests.map((req, index) => (
              <div key={req.id} className="timeline-item">
                <div className="circle">{pendingRequests.length - index}</div>
                <div className="box">
                  <p className="student">{req.student}</p>
                  <p className="details">
                    {req.course} - {req.semester}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// import { useState, useEffect } from "react";
// import "./teacher.css";

// import axios from "axios";

// import {
//   PieChart,
//   Pie,
//   Cell,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
// } from "recharts";

// export default function TeacherDashboard() {
//   const [pendingRequests, setPendingRequests] = useState([]);

// const [teacherName, setTeacherName] = useState("");
//   useEffect(() => {
//      axios.get("http://localhost:5000/api/profile/me", { withCredentials: true })
//       .then((res) => {
//         setTeacherName(res.data.user.name); // 👈 backend se aya hua naam
//       })
//       .catch((err) => console.error(err));



//   useEffect(() => {

//     setPendingRequests([
//       { id: 1, student: "Rahul", course: "CS", semester: "5th" },
//       { id: 2, student: "Anita", course: "IT", semester: "8rd" },
//       { id: 4, student: "Khushi", course: "ECE", semester: "5th" },
//        { id: 5, student: "anshika", course: "ECE", semester: "5th" },
//         { id: 6, student: "pranav", course: "ECE", semester: "5th" },
//          { id: 7, student: "saket", course: "ECE", semester: "5th" },
//     ]);
//   }, []);

//   // Chart data
//   const assessmentData = [
//     { name: "Submitted", value: 60 },
//     { name: "Pending", value: 40 },
//   ];

//   const participationData = [
//     { name: "Hackathon", value: 800},
//     { name: "Seminars", value: 500 },
//     { name: "Sports ", value:550 },
//     { name: "Debate", value: 350},
//     { name: " Fest", value: 600},
//     { name: "internship", value: 250}
//   ];

//   const COLORS = ["#454DB4", "#B5B9E9"];

//   return (
//     <div className="teacher-dashboard">
//       <div className="main-content">
//         {/* LEFT SECTION */}
//         <div className="left-panel">
        
//           <div className="card greeting">
//   <div className="greeting-content">
//     <div className="text">
//       <h2>Hello Krishna {teacherName} !</h2>

//           {/* Greeting */}
//           {/* <div className="card greeting">
//             <h2>Hello Kitty!</h2>
//             <p>You have <strong>5 new tasks</strong>. Let’s start the work..</p>
//           </div> */}
//           <div className="card greeting">
//   <div className="greeting-content">
//     <div className="text">
//       <h2>Hello Kitty!</h2>

//       <p>You have <strong>5 new tasks</strong>. Let’s start the work..</p>
//     </div>
//     <div className="image">
//       <img src="/src/assets/20250918_014444_0001.png" alt="Teacher" />
//     </div>
//   </div>
// </div>

//           {/* Assessment */}
//           <div className="card">
//             <h3>Assessment</h3>
//             <div className="chart-container">
//               <ResponsiveContainer width="100%" height={250}>
//                 <PieChart>
//                   <Pie
//                     data={assessmentData}
//                     cx="50%"
//                     cy="50%"
//                     innerRadius={65}
//                     outerRadius={95}
//                     paddingAngle={5}
//                     dataKey="value"
//                   >
//                     {assessmentData.map((entry, index) => (
//                       <Cell
//                         key={`cell-${index}`}
//                         fill={COLORS[index % COLORS.length]}
//                       />
//                     ))}
//                   </Pie>
//                   <Legend verticalAlign="bottom" layout="horizontal" />
//                   <Tooltip />
//                 </PieChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Student Participation */}
//           <div className="card">
//             <h3>Student Participation</h3>
//             <div className="chart-container">
//               <ResponsiveContainer width="100%" height={250}>
//                 <BarChart data={participationData} barSize={40}>
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Bar dataKey="value" fill="#4F46E5" radius={[8, 8, 0, 0]} />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Student Activity */}
//           {/* Student Activity */}
// <div className="card student-activity">
//   <h3>Student Activity</h3>
//   <div className="activity-list">
//     <div className="activity-item">
//       <span className="icon">📄</span>
//       <p>Rahul has submitted his assignment.</p>
//     </div>
//     <div className="activity-item">
//       <span className="icon">📄</span>
//       <p>Vidhi has submitted her assignment.</p>
//     </div>
//     <div className="activity-item">
//       <span className="icon">📄</span>
//       <p>Riya has submitted his assignment.</p>
//     </div>
//     <div className="activity-item">
//       <span className="icon">📄</span>
//       <p>Siya has submitted his assignment.</p>
//     </div>
//     <div className="activity-item">
//       <span className="icon">📄</span>
//       <p>Ram has submitted his assignment.</p>
//     </div>
//   </div>
// </div>
//         </div>

        
//             <div className="right-panel">
//   <div className="header">
//     <h3>Pending Request</h3>
//     <div className="date-row">
//       <span>18 Sep 2025</span>
//       <button className="today-btn">Today</button>
//     </div>
//   </div>

//   <div className="timeline">
//     {pendingRequests.map((req, index) => (
//       <div key={req.id} className="timeline-item">
//         <div className="circle">{pendingRequests.length - index}</div>
//         <div className="box">
//           <p className="student">{req.student}</p>
//           <p className="details">{req.course} - {req.semester}</p>
//         </div>
//       </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     </div>

//   );
//  }
