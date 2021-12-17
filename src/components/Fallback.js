import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";

import left from "../assets/left.svg";

export const Fallback = () => {
  return (
    <Container>
      <h1>잘못된 접근입니다.</h1>
      <Button
        onClick={() => {
          history.push("/main");
        }}
      >
        <img src={left} />
        메인 페이지로 이동하기
      </Button>
    </Container>
  );
};

const Container = styled.div`
  width: 375px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 20px;

  h1 {
    font-size: 25px;
    margin-bottom: 20px;
  }

  button {
    display: flex;
    font-size: 20px;
    align-items: center;
    justify-content: center;

    img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
  }
`;

const Button = styled.button`
  width: 185px;
  height: 70px;
  border-radius: 5px;
  background-color: #ececec;
  margin-top: 50px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: pink;
  }
`;
