import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Bell, User, Search } from "lucide-react";
import "./header.css";

export default function Header() {
  const [lang, setLang] = useState("Eng");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <header className="header">
  {/* Left side (logo + search) */}
  <div className="left-section">
    <div className="logo">
      <img 
        src="/src/assets/WhatsApp Image 2025-09-22 at 12.50.31 PM.jpeg"   

        alt="Logo"
      />
    </div>

    <form onSubmit={handleSearch} className="search-bar">
      <Search className="search-icon" />
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  </div>

  {/* Right side directly in header, no extra div */}
  <select
    value={lang}
    onChange={(e) => setLang(e.target.value)}
    className="lang-select"
  >
    <option value="Eng">Eng</option>
    <option value="Hin">Hin</option>
  </select>

  <button className="notif-btn" onClick={() => navigate("/notifications")}>
    <Bell className="notif-icon" />
    <span className="notif-count">8</span>
  </button>

  <button className="profile-btn" onClick={() => navigate("/profile")}>
    <User className="profile-icon" />
  </button>
</header>

//     <header className="header">
//       {/* Logo */}
//       <div className="left-section">
//     <div className="logo">
//       <img 
//         src="/src/assets/IMG_20250919_140632.jpg"   
//         alt="Logo"
//         className="h-full max-h-12 w-auto object-contain" 
//       />
//     </div>

      

//       {/* Search */}
//       <form onSubmit={handleSearch} className="search-bar">
//         <Search className="search-icon" />
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </form>
//  </div>
//       {/* Right Side */}
//       <div className="right-section">
//         {/* Language Switcher */}
//         <select
//           value={lang}
//           onChange={(e) => setLang(e.target.value)}
//           className="lang-select"
//         >
//           <option value="Eng">Eng</option>
//           <option value="Hin">Hin</option>
//           {/* <option value="Mar">Mar</option> */}
//         </select>

//         {/* Notifications */}
//         <button className="notif-btn" onClick={() => navigate("/notifications")}>
//           <Bell className="notif-icon" />
//           <span className="notif-count">8</span>
//         </button>

//         {/* Profile */}
//         <button className="profile-btn" onClick={() => navigate("/profile")}>
//           <User className="profile-icon" />
//         </button>
//       </div>
//     </header>
  );
}

