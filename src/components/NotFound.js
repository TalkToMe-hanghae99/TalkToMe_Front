import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import left from "../assets/left.svg";

const NotFound = (props) => {
  const history = useHistory();

  return (
    <Container>
      <h1>주소가 올바르지 않아요!</h1>
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        <img src={left} />
        뒤로 가기
      </button>
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

export default NotFound;
