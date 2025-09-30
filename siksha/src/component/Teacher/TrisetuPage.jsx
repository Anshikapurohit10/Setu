// import React from "react";
// import "./TrisetuPage.css";

// export default function TrisetuPage() {
//   return (
//     <div className="trisetu-container">
//       {/* Top left icons */}
//       {/* <div className="top-icons">
//         <span role="img" aria-label="graduation-cap">🎓</span>
//         <span role="img" aria-label="book">📘</span>
//       </div> */}

//       {/* Page number */}
//       <div className="page-number">page 10</div>

//       {/* Main card */}
//       <div className="trisetu-card">
//         <h1 className="trisetu-title">TRISETU</h1>
//         <p className="trisetu-subtitle">Innovation in progress!</p>

//         <div className="gear-icon">⚙️</div>

//         <div className="trisetu-box">
//           <p>
//             This feature currently under active development as part of our SIH
//             2025 Hackathon project. We’re building something amazing - check box
//             soon for updates!
//           </p>
//         </div>

//         <p className="trisetu-hash">#trisetuinnovates</p>
//         <p className="trisetu-footer">
//           Thank you for your understanding and support!
//         </p>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./TrisetuPage.css";

export default function TrisetuPage() {
  const navigate = useNavigate();

  return (
    <div className="trisetu-container">
      {/* Back button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      {/* Page number */}
      <div className="page-number">page 10</div>

      {/* Main card */}
      <div className="trisetu-card">
        <h1 className="trisetu-title">TRISETU</h1>
        <p className="trisetu-subtitle">Innovation in progress!</p>

        <div className="gear-icon">⚙️</div>

        <div className="trisetu-box">
          <p>
            This feature currently under active development as part of our SIH
            2025 Hackathon project. We’re building something amazing - check back
            soon for updates!
          </p>
        </div>

        <p className="trisetu-hash">#trisetuinnovates</p>
        <p className="trisetu-footer">
          Thank you for your understanding and support!
        </p>
      </div>
    </div>
  );
}
