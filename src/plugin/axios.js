import axios from "axios";
import router from "@/router";


axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

axios.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken !== null) {
    config.headers.Authorization = `${accessToken}`;
  }

  config.headers["Content-Type"] = "application/json";

  return config;
});

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {

  if (error.response.status === 401) {
    router.push("/login");
    return;
  }

  if (error.response.status === 500) {
    router.push("/error");
    return;
  }

  return Promise.reject(error);
});
