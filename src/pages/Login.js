import React from "react";
import styled from "styled-components";

import logo from "../assets/logo.png";
import google from "../assets/google.png";

const Login = (props) => {
  return (
    <Container>
      <Logo src={logo} />
      <LoginBtn>
        <Google>
          <img src={google} />
          <a href="https://ozam.shop/user/google">Sign in with Google</a>
        </Google>
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
`;

const Google = styled.div`
  width: 260px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 1px #818181;

  img {
    width: 40px;
    height: 40px;
  }

  a:link {
    color: black;
    text-decoration: none;
    font-weight: 700;
    font-size: 18px;
  }
  a:visited {
    color: black;
    text-decoration: none;
    font-weight: 700;
    font-size: 18px;
  }
  a:hover {
    color: blue;
    text-decoration: none;
    font-weight: 700;
    font-size: 18px;
  }
`;

export default Login;
