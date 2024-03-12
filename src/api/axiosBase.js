import axios from "axios";

// Create a new instance of axios with default configurations
const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 5000, // Timeout after 5 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

// Add an interceptor to add token to headers for every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add an interceptor to handle unauthorized errors and refresh token
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized error
      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        try {
          const response = await axiosInstance.post("/refresh-token", {
            refreshToken,
          });
          const newToken = response.data.token;
          localStorage.setItem("token", newToken);
          // Retry the original request with the new token
          error.config.headers.Authorization = `Bearer ${newToken}`;
          return axiosInstance.request(error.config);
        } catch (refreshError) {
          // Handle refresh token error
          return Promise.reject(refreshError);
        }
      } else {
        // Redirect to login or handle logout
        // Example: window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

// Export the axios instance for use in other components
export default axiosInstance;
