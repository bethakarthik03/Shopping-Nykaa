import axios from "axios";
 
const baseURL = import.meta.env.VITE_API_URL?.replace(/\/$/, "") || "http://localhost:5000";
const api = axios.create({
  baseURL: `${baseURL}/api`,
});
 
// Attach token if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
 
// Global 401 handler
api.interceptors.response.use(
  (res) => res,
  (error) => {
    const status = error?.response?.status;
    if (status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      // redirect to login
      if (typeof window !== "undefined") {
        window.location.href = "/";
      }
    }
    return Promise.reject(error);
  }
);
 
export default api;