
import axios from "axios";

// Create axios instance
const API = axios.create({
  baseURL: "https://setu-h683.onrender.com/api",
  withCredentials: true, // ✅ important for cookies/auth
});

// Automatically attach JWT token to each request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("tresetu_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
