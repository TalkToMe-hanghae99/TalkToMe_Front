import axios from "axios";

export const api = axios.create(
  {
    // 요청을 보낼 주소 설정
    // baseURL: 'http://localhost:3001/',
    baseURL: "http://www.ozam.shop/",
    headers: {
      "content-type": "application/json;charset=UTF-8",
      accept: "application/json",
    },
  },
  { withCredentials: true }
);
const getToken = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    return `Bearer ${token}`;
  } else {
    return null;
  }
};

api.interceptors.request.use(async (config) => {
  config.headers["Content-Type"] = "application/json; charset=utf-8";
  config.headers["X-Requested-With"] = "XMLHttpRequest";
  config.headers["Accept"] = "*/*";
  config.headers["authorization"] = await getToken();
  return config;
});
