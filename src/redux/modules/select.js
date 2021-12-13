// import axios from "axios";
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { instance } from "../../common/api";
//액션
const GET_DETAIL = "GET_DETAIL";

// 액션함수
const detailDetail = createAction(GET_DETAIL, (detailList) => ({ detailList }));

// 초기값
const initialState = {
  deail_list: [],
};

//미들웨어
const getDetailAPI = (selectId) => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/select/${selectId}`)
      .then((res) => {
        console.log(res);
        dispatch(detailDetail(res.data));
      })
      .catch((err) => {
        console.log(err, "디테일에러");
      });
  };
};

export default handleActions(
  {
    [GET_DETAIL]: (state, action) =>
      produce(state, (draft) => {
        draft.deail_list = action.payload.detailList;
      }),
  },
  initialState
);

const actionCreators = {
  getDetailAPI,
};

export { actionCreators };
