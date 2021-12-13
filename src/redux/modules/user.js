// import { createAction, handleActions } from "redux-actions";
// import { produce } from "immer";
// import { setToken, delToken } from "../../shared/token";
// import { instance } from "../../common/api";

// // action type
// const SET_USER = "SET_USER";

// // action creator
// const setUser = createAction(SET_USER, (token, user) => ({
//   token,
//   user,
// }));

// // middleware
// const signinGoogleDB = (auth) => {
//   return async (dispatch, getState, { history }) => {
//     const token = {
//       access_token: auth,
//     };

//     try {
//       const response = await instance.signinGoogle(token);
//       const _token = response.data.token;
//       const user = response.data.user;

//       dispatch(setUser(_token, user));
//       history.push("/");
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// // initial state
// const initialState = {
//   uploadImage: "",
//   is_email: null,
//   is_nickname: null,
//   is_login: false,
//   user: {},
//   message: "",
// };

// // reducer
// export default handleActions(
//   {
//     [SET_USER]: (state, action) =>
//       produce(state, (draft) => {
//         setToken(JSON.stringify(action.payload.token));
//         sessionStorage.setItem("user", JSON.stringify(action.payload.user));
//         draft.is_login = true;
//         draft.user = action.payload.user;
//       }),
//   },
//   initialState
// );

// export const userActions = {
//   signinGoogleDB,
// };
