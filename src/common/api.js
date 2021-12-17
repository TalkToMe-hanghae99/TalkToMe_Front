import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_server,
  withCredentials: true,
  headers: {
    "Content-type": "application/json;charset=UTF-8",
    // accept: "application/json",
    accept: "application/x-www-form-urlencoded",
    "Access-Control-Allow-Origin": process.env.REACT_APP_server,
  },
});

instance.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json; charset=utf-8";
  config.headers["Authorization"] = `Bearer  ${localStorage.getItem(
    "accessToken"
  )}`;
  config.headers["X-Requested-With"] = "XMLHttpRequest";
  return config;
});

export const apis = {
  //회원정보 요청
  getUser: () => instance.get(`/user/me`),

  // 댓글 조회
  getComment: (boardId) => instance.get(`/board/${boardId}/comment`),

  //댓글 작성
  addComment: (comment) =>
    instance.post(`/board/${comment.boardId}/comment`, comment),

  // 댓글 삭제
  deleteComment: (commentId, boardId) =>
    instance.delete(`/board/${boardId}/comment/${commentId}`),

  // 댓글 수정
  editComment: (comment, boardId) =>
    instance.patch(`/board/${boardId}/comment/${comment.commentId}`, comment),

  //검색
  getSearch: (group, keyword) =>
    instance.post(`/search?group=${group}&keyword=${keyword}`),
};
