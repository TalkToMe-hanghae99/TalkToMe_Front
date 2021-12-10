import React from "react";
import styled from "styled-components";

import Left from "../assets/left.svg";
import CommentWrite from "../components/CommentWrite";

const WorryDetail = (props) => {
  return (
    <Container>
      <Header>
        <img src={Left} />
        <span>톡톡</span>
      </Header>
      <CommentWrite />
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
  padding: 20px;
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  z-index: 5;
  background-color: #f8f9fa;
  width: 375px;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 10px 20px;

  img {
    height: 60%;
    cursor: pointer;
  }

  span {
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
  }
`;

export default WorryDetail;
