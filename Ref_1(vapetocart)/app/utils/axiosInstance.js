import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_URL || "https://shopify-apis.onrender.com", 
  baseURL: process.env.WEBSITE_URL || "https://www.vapetocart.co.uk/",
  //timeout: 10000, // Optional: set a timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor (optional)
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Modify or add tokens/headers if needed
//     const token = localStorage.getItem("token"); // Example: JWT token
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Add response interceptor (optional)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    if (error.response && error.response.status === 401) {
      console.log("Unauthorized");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
