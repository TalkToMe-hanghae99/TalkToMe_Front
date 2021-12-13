import { createAction } from "redux-actions";
import { instance } from "../../common/axios";

//액션
const GET_MAIN_SELECT = "GET_MAIN_SELECT";

//액션함수
const getMainSelect = createAction(GET_MAIN_SELECT, (mainSelectList) => ({
  mainSelectList,
}));

//초기값
const initialState = {
  main_selectlist: [],
};

//미들웨어
const getMainSelelctAPI = (sort, page) => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/select?sort=${sort}&page=${page}`)
      .then((res) => {
        console.log(res);
        dispatch(getMainSelect(res.data));
      })
      .catch((err) => {
        console.log(err, "메인선택에러");
      });
  };
};
