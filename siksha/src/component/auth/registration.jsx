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
        "https://setu-h683.onrender.com/api/profile",
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



