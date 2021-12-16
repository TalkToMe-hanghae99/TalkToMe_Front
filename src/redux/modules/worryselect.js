/* eslint-disable */

import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../common/api";

//액션타입
const GET_WORRY = "GET_WORRY";
const ADD_WORRY = "ADD_WORRY";
const DELETE_WORRY = "DELETE_WORRY";

//action creator export
const actionCreators = {
  getWorryDetailAPI,
  addCommentAPI,
  deleteCommentAPI,
};

export { actionCreators };
