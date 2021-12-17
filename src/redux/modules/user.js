/* eslint-disable */

import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../common/api";

const SET_USER = "SET_USER";

const setUser = createAction(SET_USER, (user) => ({ user }));

const initialState = {};

export const getUserAPI = () => {
  return function (dispatch, getState, { history }) {
    apis.getUser().then((res) => {
      const user = res.data;
      dispatch(setUser(user));
    });
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.isLoggedIn = true;
      }),
  },
  initialState
);

const userActions = {
  getUserAPI,
};

export { userActions };
