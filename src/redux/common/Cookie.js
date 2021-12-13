import axios from "axios";
// import { getCookie } from "../shared/common/Cookie";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const instance = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// // 요청 then catch 전에 인터셉터(가로채기) 가로채서 토큰이 있을 경우 저장해줌

// instance.interceptors.request.use((config) => {
//   const token = getCookie("is_login");
//   if (token) {
//     config.headers.common["X-AUTH-TOKEN"] = token;
//   } else {
//     config.headers.common["X-AUTH-TOKEN"] = null;
//   }
//   return config;
// });

// 멀티 폼 전송방식 프로필 이미지 넘길 시 사용
