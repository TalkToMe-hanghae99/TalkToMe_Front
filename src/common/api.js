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
  addComment: (comment) =>
    instance.post(`/board/${comment.boardId}/comment`, comment),

  // 댓글 삭제
  deleteComment: (commentId, boardId) =>
    instance.delete(`http://ozam.shop/board/${boardId}/comment/${commentId}`),

  //검색페이지
  
  
  //고민상세페이지
   // 댓글 조회
   getWorryDetail: (boardId) => instance.get(`/board/${boardId}`),

   //댓글 작성
   addWorryDetail: (comment) =>
     instance.post(`/board/${comment.boardId}/comment??`, comment),
 
   // 댓글 삭제
   deleteWorryDetail: (boardId) =>
     instance.delete(`http://ozam.shop/board/${boardId}`),
 
};
