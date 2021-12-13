import React, { useState } from "react";
import styled from "styled-components";
import { GoogleLogin } from "react-google-login";

import { history } from "../redux/configureStore";
import logo from "../assets/logo.png";

const Login = (props) => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const LoginSuccess = (res) => {
    console.log("로그인성공", res.profileObj);
    history.push("/main");
  };

  const LoginFail = (res) => {
    console.log("로그인실패", res);
  };

  return (
    <Container>
      <Logo src={logo} />
      <LoginBtn>
        <GoogleLogin
          clientId={clientId}
          buttonText="Log in with Google"
          onSuccess={LoginSuccess}
          onFailure={LoginFail}
          cookiePolicy={"single_host_origin"}
        />
      </LoginBtn>
    </Container>
  );
};

const Container = styled.div`
  width: 375px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const Logo = styled.img`
  width: 80%;
  margin: 80px 0;
`;

const LoginBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    margin-bottom: 20px;
  }
`;

export default Login;
