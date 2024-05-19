import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_LOCAL_SERVER_URL}/`,
  timeout: 600000,
});

axiosInstance.interceptors.request.use(
  async (reqConfig) => {
    // const accessToken = localStorage.getItem("auth");

    return reqConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
      return response;
  },

  async (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
