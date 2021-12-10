import React from "react";
import styled from "styled-components";

import Left from "../assets/left.svg";

const WorryCreateUpdate = (props) => {
  return (
    <Container>
      <Header>
        <img src={Left} />
        <span>톡톡 작성하기</span>
      </Header>
      <Title type="text" placeholder="제목을 입력하세요" />
      <Content type="text" placeholder="내용을 입력하세요" />
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

const Title = styled.input`
  width: 100%;
`;

const Content = styled.input`
  width: 100%;
`;

export default WorryCreateUpdate;
