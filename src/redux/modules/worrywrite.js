import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import { instance } from "../../common/api";

//미들웨어
const postWriteAPI = () => {
  return function (dispatch, getState, { history }) {
    instance
      .post(`/board/write`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err, "글쓰기작성");
      });
  };
};
