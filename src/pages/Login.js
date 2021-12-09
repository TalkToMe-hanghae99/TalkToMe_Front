import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const Login = (props) => {
  return (
    <Container>
      <Logo src={logo} />
      <LoginBtn>
        <button>카카오 로그인</button>
        <button>구글 로그인</button>
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
