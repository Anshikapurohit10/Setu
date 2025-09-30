import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import TrisetuPage from "./TrisetuPage";
import { useNavigate } from "react-router-dom";

import {
  FaFileAlt,
  FaBook,
  FaComments,
  FaQuestionCircle,
  FaCog,
  FaCheckCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const userRole = localStorage.getItem("role") || "student";
  console.log("Rendering Sidebar with role:", userRole);
  const navigate = useNavigate();

  const handleLogout = () => {
    // localStorage या sessionStorage clear कर दो
    localStorage.removeItem("role");
    localStorage.removeItem("token");

    // अब login page पर redirect
    navigate("/login");
  };
  return (
    <div
      className={`sidebar ${expanded ? "expanded" : ""}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <ul className="menu">
        {/* ---------------- Student Menu ---------------- */}
        {userRole === "student" && (
          <>
            <li>
              <NavLink to="/student">
                <FaBook className="icon" /> <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/newactivity">
                <FaCheckCircle className="icon" /> <span>Upload Activity</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/myactivity">
                <FaCheckCircle className="icon" /> <span>My Activity</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/result">
                <FaFileAlt className="icon" /> <span>Result</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/TrisetuPage">
                <FaComments className="icon" /> <span>Alumni Connect</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/TrisetuPage">
                <FaQuestionCircle className="icon" /> <span>Opportunity</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/TrisetuPage">
                <FaFileAlt className="icon" /> <span>Help</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/TrisetuPage">
                <FaCog className="icon" /> <span>Settings</span>
              </NavLink>
            </li>
          </>
        )}

        {/* ---------------- Teacher Menu ---------------- */}
        {userRole === "teacher" && (
          <>
            <li>
              <NavLink to="/teacher">
                <FaBook className="icon" /> <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/profileV">
                <FaCheckCircle className="icon" /> <span>Profile Verification</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/verify">
                <FaCheckCircle className="icon" /> <span>Verify Activity</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/AssignmentTeacher">
                <FaBook className="icon" /> <span>Assignment</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/TrisetuPage">
                <FaComments className="icon" /> <span>Alumni Chat</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/TrisetuPage">
                <FaQuestionCircle className="icon" /> <span>Help</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/TrisetuPage">
                <FaCog className="icon" /> <span>Settings</span>
              </NavLink>
            </li>
          </>
        )}

        {/* ---------------- Common Logout ---------------- */}
         <li className="logout" onClick={handleLogout}>
      <FaSignOutAlt className="icon" /> <span>Log out</span>
    </li>
      </ul>
    </div>
  );
};

export default Sidebar;

// import React , { useState }from "react";
// import { NavLink } from "react-router-dom";
// import { FaTachometerAlt, FaFileAlt, FaBook, FaComments, FaQuestionCircle, FaCog, FaCheckCircle, FaSignOutAlt } from "react-icons/fa";
// import "./Sidebar.css";

// const Sidebar = () => {
  
//   const [expanded, setExpanded] = useState(false);
//    const userRole = localStorage.getItem("role") || "student"; 
//     console.log("Rendering Sidebar with role:", userRole);

//   return (

//     <div className={`sidebar ${expanded ? "expanded" : ""}`}
//       onMouseEnter={() => setExpanded(true)}
//       onMouseLeave={() => setExpanded(false)}>
//      {/* <div className="logo"> logo</div> */}
//       <ul className="menu">

//          {userRole === "student" && (
//     <>
//       <li>

//         <NavLink to="/student">

        

//           <FaBook className="icon" /> <span>Dashboard</span>
//         </NavLink>
//       </li>
//       <li>

//         <NavLink to="/newactivity">
//           <FaCheckCircle className="icon" /> <span>Upload Activity</span>
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to="/myactivity">
//           <FaCheckCircle className="icon" /> <span> MY Activity</span>
//         </NavLink>
//       </li>
//       <li>

//               <NavLink to="/result">
//                 <FaFileAlt className="icon" /> <span>Result</span>
//               </NavLink>
//             </li>
//       <li>
//         <NavLink to="/connect">
//           <FaComments className="icon" /> <span>Alumni Connect</span>
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to="/Opportunity">
//           <FaQuestionCircle className="icon" /> <span>opportunity</span>
//         </NavLink>
//       </li>
//       <li>
//               <NavLink to="/help">
//                 <FaFileAlt className="icon" /> <span>Help</span>
//               </NavLink>
//             </li>
//       <li>
//         <NavLink to="/settings">
//           <FaCog className="icon" /> <span>Setting</span>
//         </NavLink>
//       </li>

//       <li>
//         <NavLink to="/activity">
//           <FaCheckCircle className="icon" /> <span>New Activity</span>
//         </NavLink>
//       </li>
       

//     </>
//   )}
//   {userRole === "teacher" && (
//     <>

//     <li>
//         <NavLink to="/teacher">
//           <FaBook className="icon" /> <span>Dashboard</span>
//         </NavLink>
//       </li>
      
//         <li>
//           <NavLink to="/profileV">
//             <FaCheckCircle className="icon" /> <span>profile verification</span>
//           </NavLink>
//         </li>
//       <li>
//           <NavLink to="/verify">
//             <FaCheckCircle className="icon" /> <span>Verify Activity</span>
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/assignment">
//             <FaBook className="icon" /> <span>Assignment</span>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/chat">
//             <FaComments className="icon" /> <span>Alumni Chat</span>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/help">
//             <FaQuestionCircle className="icon" /> <span>Help</span>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/settings">
//             <FaCog className="icon" /> <span>Setting</span>
//           </NavLink>
//         </li>
       
//         <li>
//           <NavLink to="/profileV">
//             <FaCheckCircle className="icon" /> <span>profile verification</span>

//         <li>
//           <NavLink to="/verify">
//             <FaCheckCircle className="icon" /> <span>Verify Activity</span>

//           </NavLink>
//         </li>
        
//         </>
//   )}

//         <li className="logout">
//           <NavLink to="/logout">
//             <FaSignOutAlt className="icon" /> <span>Log out</span>
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
