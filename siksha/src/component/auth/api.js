import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
   // ✅ backend base URL
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

