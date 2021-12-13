import React from "react";
import GoogleLogin from "react-google-login";
// redux
import { useDispatch } from "react-redux";
import { userActions } from "../redux/modules/user";

const GoogleLoginBtn = () => {
  const dispatch = useDispatch();

  const responseGoogle = (response) => {
    const auth = response.accessToken;

    dispatch(userActions.signinGoogleDB(auth));
  };

  return (
    <GoogleLogin
      clientId="945869038005-idkanb8tp5hh5tuicvub7u94hc6iogev.apps.googleusercontent.com"
      render={(renderProps) => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
          구글 로그인 버튼
        </button>
      )}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLoginBtn;
