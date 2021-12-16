// import axios from "axios";
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { instance } from "../../common/api";
//액션
const GET_DETAIL = "GET_DETAIL";
const GET_MAIN = "GET_MAIN";
const DELETE_SELECT = "DELETE_SELECT";
const LIKE_SELECT = "LIKE_SELECT";
const POST_VOTE = "POST_VOTE";
//액션함수
const detailDetail = createAction(GET_DETAIL, (detailList) => ({ detailList }));
const deleteSelect = createAction(DELETE_SELECT, (selectId) => ({ selectId }));
//메인 페이지
const cardList = createAction(GET_MAIN, (mainList) => ({ mainList }));
const likeSelect = createAction(LIKE_SELECT, (selectId, like) => ({
  selectId,
  like,
}));
//투표
const postVote = createAction(POST_VOTE, (data) => data);
// 초기값
const initialState = {
  detail_list: [],
  main_list: [],
  like_list: [],
  vote_list: [],
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

//게시글 수정
const UpdateSelectAPI = (selectId, selectEditInfo) => {
  return function (dispatch, getState, { history }) {
    instance
      .patch(`/select/${selectId}`, selectEditInfo)
      .then((res) => {
        console.log(res, "기달");
        history.replace(`/select/${selectId}`);
      })
      .catch((err) => {
        console.log(err, "수정에러");
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
        history.replace(`/main`);
      })
      .catch((err) => {
        console.log(err, "삭제에러");
      });
  };
};

//좋아요/취소
// const likeSelectAPI = (selectId) => {
//   return function (dispatch, getState, { history }) {
//     instance
//       .post(`/select/${selectId}/like`, { selectId: selectId })
//       .then((res) => {
//         dispatch(likeSelect(selectId));
//         // if (!like) {
//         //   window.alert("좋아요를 누르셨습니다.");
//         // }
//       })
//       .catch((err) => {
//         console.log(err, "좋아요 에러");
//       });
//   };
// };

// 투표
const postVoteAPI = (selectId, optionId) => {
  return function (dispatch, getState, { history }) {
    console.log(selectId, optionId);
    instance
      .post(`/select/${selectId}`, { optionNum: optionId })
      .then((res) => {
        const data = {
          selectId: {
            1: Number(optionId),
            2: Number(optionId),
          },
        };
        dispatch(postVote(data));
      })
      .catch((err) => {
        console.log(err, "투표에러");
      });
  };
};

// 리덕스
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
        const idx = draft.main_list.findIndex((e) => {
          return e.selectId === action.payload.selectId;
        });
        if (idx !== -1) {
          draft.main_list.splice(idx, 1);
        }
      }),

    [POST_VOTE]: (state, action) =>
      produce(state, (draft) => {
        draft.vote_list = action.payload.selectId;
      }),
    // [LIKE_SELECT]: (state, action) =>
    //   produce(state, (draft) => {
    //     if (action.payload.like.isLiked) {
    //       draft.like_list.push(action.payload.selectId);
    //       return;
    //     } else {
    //       const idx = draft.like_list.indexOf(action.payload.selectId);
    //       if (idx !== -1) {
    //         draft.like_list.splice(idx, 1);
    //       }
    //     }
    //   }),
  },
  initialState
);

const actionCreators = {
  getDetailAPI,
  getMAinAPI,
  deleteSelectAPI,
  UpdateSelectAPI,
  postVoteAPI,
  // likeSelectAPI,
};

export { actionCreators };
