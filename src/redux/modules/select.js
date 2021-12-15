// import axios from "axios";
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { instance } from "../../common/api";
//액션
const GET_DETAIL = "GET_DETAIL";
const GET_MAIN = "GET_MAIN";
const DELETE_SELECT = "DELETE_SELECT";
// const delete_det
// 액션함수
const detailDetail = createAction(GET_DETAIL, (detailList) => ({ detailList }));
const deleteSelect = createAction(DELETE_SELECT, (selectId) => ({ selectId }));
//메인 페이지
const cardList = createAction(GET_MAIN, (mainList) => ({ mainList }));

// 초기값
const initialState = {
  detail_list: [],
  main_list: [],
};

//미들웨어
const getDetailAPI = (selectId) => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`select/${selectId}`)
      .then((res) => {
        console.log(res);

        dispatch(detailDetail(res.data.selectList[0]));
      })
      .catch((err) => {
        console.log(err, "디테일에러");
      });
  };
};

//메인페이지 데이터
const getMAinAPI = (date) => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/select?sort=${date}&page=${4}`)
      .then((res) => {
        console.log(res);
        dispatch(cardList(res.data));
      })
      .catch((err) => {
        console.log(err, "카드에러");
      });
  };
};

//삭제
const deleteSelectAPI = (selectId) => {
  return function (dispatch, getStste, { history }) {
    instance
      .delete(`/select/${selectId}`)
      .then((res) => {
        dispatch(deleteSelect(selectId));
        history.replace(`/community`);
      })
      .catch((err) => {
        console.log(err, "삭제에러");
      });
  };
};
export default handleActions(
  {
    [GET_DETAIL]: (state, action) =>
      produce(state, (draft) => {
        draft.detail_list = action.payload.detailList;
      }),
    [GET_MAIN]: (state, action) =>
      produce(state, (draft) => {
        draft.main_list = action.payload.mainList;
      }),
    [DELETE_SELECT]: (state, action) =>
      produce(state, (draft) => {
        const idx = draft.detail_list.findIndex((e) => {
          return e.selectId === action.payload.selectId;
        });
        if (idx !== -1) {
          draft.detail_list.splice(idx, 1);
        }
      }),
  },
  initialState
);

const actionCreators = {
  getDetailAPI,
  getMAinAPI,
  deleteSelectAPI,
};

export { actionCreators };
