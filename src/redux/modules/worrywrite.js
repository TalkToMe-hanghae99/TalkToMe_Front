import produce from "immer";
import { useHistory } from "react-router";

import { createAction, handleActions } from "redux-actions";
import { instance } from "../../common/api";

//미들웨어
const postWriteAPI = (worryInfo) => {
  return function (dispatch, getState, { history }) {
    console.log(worryInfo);
    instance
      .post(`/board/write`, worryInfo)
      .then((res) => {
        console.log(res);
        // const history = useHistory();
        history.replace("/main");
      })
      .catch((err) => {
        console.log(err, "글쓰기작성");
      });
  };
};

//조회

const actionCreators = {
  postWriteAPI,
};

export { actionCreators };
