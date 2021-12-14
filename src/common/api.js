import axios from "axios";

export const instance = axios.create({
  baseURL: "http://ozam.shop/",
});

instance.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json; charset=utf-8";
  config.headers["Authorization"] = `Bearer ${localStorage.getItem(
    "accessToken"
  )}`;
  return config;
});

export const apis = {};
