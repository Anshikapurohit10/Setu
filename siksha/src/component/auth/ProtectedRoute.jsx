// src/auth/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem("tresetu_token");
  const userRole = localStorage.getItem("role");

  if (!token) return <Navigate to="/login"  replace/>;

  if (role && userRole !== role) return <Navigate to="/unauthorized" />;

  return children;
};

export default ProtectedRoute;

