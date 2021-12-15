import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_server,
  headers: {
    "Content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

instance.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json; charset=utf-8";
  config.headers["Authorization"] = `Bearer  ${localStorage.getItem(
    "accessToken"
  )}`;
  return config;
});

export const apis = {
  // 댓글 조회
  getComment: (boardId) => instance.get(`/board/${boardId}/comment`),

  //댓글 작성
  // addComment: (comment) =>
  //   instance.post(`/board/${boardId}/comment`, comment),

  // 댓글 삭제
  // deleteComment: (commentId) =>
  //   instance.delete(`/comment/${commentId}`),

  //검색페이지
};
