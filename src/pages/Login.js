import React, { useState } from "react";
import styled from "styled-components";
// import { useDispatch, useSelector } from "react-redux";

import logo from "../assets/logo.png";
// import GoogleLoginBtn from "../components/GoogleLoginBtn";
// import { instance } from "../common/api";
// import axios from "axios";

const Login = (props) => {
  // const googleURL =
  //   "https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=http://localhost:3000/user/google/callback&scope=profile%20email&client_id=945869038005-idkanb8tp5hh5tuicvub7u94hc6iogev.apps.googleusercontent.com&flowName=GeneralOAuthFlow";
  // const googleURL =
  //   "https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=http://ozam.shop/user/google/callback&scope=profile%20email&client_id=945869038005-idkanb8tp5hh5tuicvub7u94hc6iogev.apps.googleusercontent.com&flowName=GeneralOAuthFlow";
  // const [isRedirect, setIsRedirect] = useState(false);
  // const user = useSelector((state) => state.user);
  // console.log("유저정보", user);

  // const loginWithGoogle = () => {
  //   axios
  //     .get("http://ozam.shop/user/google")
  //     .then(function (response) {
  //       console.dir("겟요청성공", response);
  //       // setIsRedirect(true);
  //     })
  //     .catch(function (error) {
  //       console.log("실패");
  //     })
  //     .then(function () {
  //       // 항상 실행
  //     });
  // };

  // const loginWithGoogle = async () => {
  //   try {
  //     const data = await apis.googlelogin(user);
  //     console.log("데이터", data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const loginWithGoogle = () => {
  //   axios
  //     .get("http://ozam.shop/select")
  //     .then(function (response) {
  //       console.log("겟요청성공", response);
  //     })
  //     .catch(function (error) {
  //       console.log("실패");
  //     })
  //     .then(function () {
  //       // 항상 실행
  //     });
  // };

  return (
    <Container>
      <Logo src={logo} />
      <LoginBtn>
        <button>카카오 로그인</button>
        {/* <GoogleLogin
          clientId="945869038005-idkanb8tp5hh5tuicvub7u94hc6iogev.apps.googleusercontent.com"
          buttonText="Google Login"
          onSuccess={(result) => onLoginSuccess(result)}
          onFailure={(result) => console.log(result)}
        /> */}
        <a href="https://bomborobom.shop/api/auth/google">구글로그인</a>
        {/* <GoogleLoginBtn /> */}
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
