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
