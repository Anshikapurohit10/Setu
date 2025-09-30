import React, { useState, useEffect } from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Registration = () => {
  const [formData, setFormData] = useState({
    role: "student",
    name: "",
    collegeName: "",
    collegeId: "",
    course: "",
    semester: "",
    email: "",
    phone: "",
    password: "",
    rollNumber: "",
  });

  const navigate = useNavigate();

  // Prefill email/password from tempSignIn (if available)
  useEffect(() => {
    const tempData = JSON.parse(localStorage.getItem("tempSignIn"));
    if (tempData?.email && tempData?.password) {
      setFormData((prev) => ({
        ...prev,
        email: tempData.email,
        password: tempData.password,
      }));
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check token from login
      const token = localStorage.getItem("tresetu_token");
      if (!token) {
        alert("Please login first to complete registration");
        return;
      }

      // Send profile data
      await axios.post(
        "http://localhost:5000/api/profile",
        {
          collegeId: formData.collegeId,
          collegeName: formData.collegeName,
          rollNumber: formData.rollNumber,
          semester: formData.semester,
          phone: formData.phone,
          course: formData.course,
          role: formData.role,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert(`Registered successfully as ${formData.role.toUpperCase()}`);

      if (formData.role === "student") navigate("/login");
      else if (formData.role === "teacher") navigate("/teacher");
      else if (formData.role === "admin") navigate("/admin");

      // Reset form
      setFormData({
        role: "student",
        name: "",
        collegeName: "",
        collegeId: "",
        course: "",
        semester: "",
        email: "",
        phone: "",
        password: "",
        rollNumber: "",
      });
    } catch (err) {
      console.error("Registration error:", err);
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1>On Board</h1>

        <select name="role" value={formData.role} onChange={handleChange} required>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>

        <input
          type="text"
          name="name"
          placeholder="Enter your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="collegeName"
          placeholder="Enter your College Name"
          value={formData.collegeName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="collegeId"
          placeholder="Enter your College Id"
          value={formData.collegeId}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="rollNumber"
          placeholder="Enter your Roll Number"
          value={formData.rollNumber}
          onChange={handleChange}
        />

        <input
          type="text"
          name="semester"
          placeholder="Enter your Semester"
          value={formData.semester}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="course"
          placeholder="Enter Course"
          value={formData.course}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="10-digit number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;

// import React, { useState , useEffect }  from "react";
// import "./Registration.css";
// import { useNavigate } from "react-router-dom";
// <<<<<<< HEAD
// import axios from "axios";
// =======

// >>>>>>> cb75f395594eb5ac4f5e63f2cfd951eb7bb215ef


//   const Registration = () => {
//   const [formData, setFormData] = useState({
//     role: "student",
//     name: "",
// <<<<<<< HEAD
//     collegeName:"",
//     collegeId: "",
// =======
//     collegeID: "",
// >>>>>>> cb75f395594eb5ac4f5e63f2cfd951eb7bb215ef
//     course: "",
//     semester: "",
//     email: "",
//     phone: "",
//      password: "",
// <<<<<<< HEAD
//      rollNumber:"",
// =======
// >>>>>>> cb75f395594eb5ac4f5e63f2cfd951eb7bb215ef
//   });

//   const navigate = useNavigate();
//   useEffect(() => {
//     const tempData = JSON.parse(localStorage.getItem("tempSignIn"));
// <<<<<<< HEAD
//     if (tempData?.email && tempData?.password) {
// =======
//     if (tempData) {

//       setFormData((prev) => ({
//         ...prev,
//         email: tempData.email,
//         password: tempData.password,
//       }));
//     }
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

// console.log('Sending to /api/auth/register:', {
//     name: formData.name,
//     email: formData.email,
//     password: formData.password,
//     role: formData.role,
// });
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//  try {
//       // 1. Register user
//     //   const registerRes = await axios.post("http://localhost:5000/api/auth/register", {
//     //     name: formData.name,
//     //     email: formData.email,
//     //     password: formData.password,
//     //     role: formData.role,
//     //   });

//     //   const { token, user } = registerRes.data;
//     //    localStorage.setItem("tresetu_token", token);
//     // localStorage.setItem("role", user.role);
// const token = localStorage.getItem("tresetu_token");
//     if (!token) {
//       alert("Please login first to complete registration");
//       return;
//     }
//       // 2. Create profile (student/teacher info)
//       await axios.post(
//         "http://localhost:5000/api/profile",
//         {
//           collegeId: formData.collegeId,
//           collegeName: "My College", // you can add a field if needed
//           rollNumber: formData.rollNumber, // or use a separate field
//           semester: formData.semester,
//           phone: formData.phone,
//           course: formData.course,
//           role: formData.role, 
//         },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//     // Save user in localStorage
//     // localStorage.setItem("registeredUser", JSON.stringify(formData));
//     // // localStorage.setItem("teacherName", "Prof. Sharma"); // replace with real name from backend

//     alert(`Registered successfully as ${formData.role.toUpperCase()}`);

//     if (formData.role === "student")
//       {
//     navigate("/Login")
//     }
//     else if (formData.role === "teacher")
//        {
//         navigate("/teacher")
//       }
//    else if (formData.role === "admin") {
//         navigate("/admin");
//       }


//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Save user in localStorage
//     localStorage.setItem("registeredUser", JSON.stringify(formData));
//     // localStorage.setItem("teacherName", "Prof. Sharma"); // replace with real name from backend

//     alert(`Registered successfully as ${formData.role.toUpperCase()}`);

//     if (formData.role === "student") navigate("/student");
//     else if (formData.role === "teacher") navigate("/teacher");
//     else navigate("/admin");


//     // Reset form
//     setFormData({
//       role: "student",
//       name: "",

//       collegeId: "",
//       collegeName: "",

//       collegeID: "",
//       course: "",
//       semester: "",
//       email: "",
//       phone: "",
//       password: "",

//       rollNumber:"",
//     });
//     } catch (err) {
//       console.error("Registration error:", err);
//       alert(err.response?.data?.message || "Registration failed");
//     }
//   };
  
  
//   return (

//     <div className="register-container">
//       <form className="register-form" onSubmit={handleSubmit}>
//       <h1>On Board</h1>

//       <select name="role" value={formData.role} onChange={handleChange} required>
//         <option value="student">Student</option>
//         <option value="teacher">Teacher</option>
//         <option value="admin">Admin</option>
//       </select>

//       <input 
//         type="text" 
//         name="name" 
//         placeholder="Enter your Name" 
//         value={formData.name} 
//         onChange={handleChange} 
//         required 
//       />

//        <input 
//         type="text" 
//         name="collegeName" 
//         placeholder="Enter your collegeName" 
//         value={formData.collegeName} 
//         onChange={handleChange} 
//         required 
//       />


//       <input 
//         type="text" 
//         name="collegeId" 
//         placeholder="Enter your College Id" 
//         value={formData.collegeId} 
//         onChange={handleChange} 
//         required 
//       /><input 
//         type="text" 
//         name="rollNumber" 
//         placeholder="Enter your rollNumber" 
//         value={formData.rollNumber} 
// />

//       <input 
//         type="text" 
//         name="collegeID" 
//         placeholder="Enter your College ID" 
//         value={formData.collegeID} 

//         onChange={handleChange} 
//         required 
//       />

//       <input 
//         type="text" 
//         name="semester" 
//         placeholder="Enter your Semester" 
//         value={formData.semester} 
//         onChange={handleChange} 
//         required 
//       />

//       <input 
//         type="text" 
//         name="course" 
//         placeholder="Enter Course" 
//         value={formData.course} 
//         onChange={handleChange} 
//         required 
//       />

//       <input 
//         type="email" 
//         name="email" 
//         placeholder="Enter your Email" 
//         value={formData.email} 
//         onChange={handleChange} 
//         required 
//       />

//       <input 
//         type="text" 
//         name="phone" 
//         placeholder="10-digit number" 
//         value={formData.phone} 
//         onChange={handleChange} 
//         required 
//       />

//       <input 
//         type="password" 
//         name="password" 
//         placeholder="Password" 
//         value={formData.password} 
//         onChange={handleChange} 
//         required 
//       />

//       <button type="submit">Register</button>
//     </form>
     
//     </div>

  

//   );
// };

// export default Registration;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import Api from "../../services/api";
// import "./Registration.css";

// const Registration = () => {
//     const navigate = useNavigate();
//     const { logout } = useAuth();
//     const [formData, setFormData] = useState({
//         collegeId: "", collegeName: "", rollNumber: "",
//         semester: "", phone: "", course: "",
//     });
//     const [userRole, setUserRole] = useState("");

//     useEffect(() => {
//         const storedUser = JSON.parse(localStorage.getItem("user"));
//         if (!storedUser) {
//             navigate('/login');
//         } else {
//             setUserRole(storedUser.role);
//         }
//     }, [navigate]);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await Api.post("/profile", { ...formData, role: userRole });

//             if (userRole === "student") {
//                 alert("Profile submitted for verification. Please wait for approval and log in again later.");
//                 logout(); // Clears token/user and navigates to /login
//             } else {
//                 alert("Registration complete! Please log in to continue.");
//                 logout(); // Also log out teachers so they can sign in fresh
//             }
//         } catch (err) {
//             alert("An error occurred. Please try again.");
//             console.error(err);
//         }
//     };

//     return (
//         <div className="registration-container">
//             <form onSubmit={handleSubmit} className="registration-form">
//                 <h1>Complete Your Profile</h1>
//                 <p>Your role: <strong>{userRole.toUpperCase()}</strong></p>
//                 <input type="text" name="collegeName" placeholder="College Name" value={formData.collegeName} onChange={handleChange} required />
//                 <input type="text" name="collegeId" placeholder="College ID" value={formData.collegeId} onChange={handleChange} required />
//                 <input type="text" name="rollNumber" placeholder="Roll Number" value={formData.rollNumber} onChange={handleChange} required />
//                 <input type="text" name="semester" placeholder="Semester" value={formData.semester} onChange={handleChange} required />
//                 <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} required />
//                 <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
//                 <button type="submit">Complete Registration</button>
//             </form>
//         </div>
//     );
// };

// export default Registration;

