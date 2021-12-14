import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import Left from "../assets/left.svg";

const WorryCreateUpdate = (props) => {
  const history = useHistory();

  const [TitleValue, setTitleValue] = useState("");
  const [ContentValue, setContentValue] = useState("");

  return (
    <Container>
      <Header
        onClick={() => {
          history.push("/main");
        }}
      >
        <img src={Left} />
        <span>톡톡 작성하기</span>
      </Header>
      <WriteBox>
        <Title
          type="text"
          onChange={(e) => {
            setTitleValue(e.target.value);
          }}
          value={TitleValue}
          placeholder="제목을 입력하세요."
        ></Title>
        <Hr />
        <Content
          type="text"
          placeholder="내용을 입력하세요."
          rows="10"
          onChange={(e) => {
            setContentValue(e.target.value);
          }}
          value={ContentValue}
        ></Content>
        <Hr />
      </WriteBox>
      <BtnBox>
        <button>작성완료</button>
        <button>취소</button>
      </BtnBox>
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

const WriteBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
`;

const Title = styled.input`
  height: 40px;
  width: 100%;
  padding: 10px 20px;
  outline: none;
  border: none;
  background-color: #fafafa;
  margin: 0 15px 15px 0;
  border-radius: 4px;
  font-size: 16px;
  color: rgb(33, 37, 41);
  line-height: 1.75;
  word-break: break-all;
  ::placeholder {
    color: #adb5bd;
  }
`;

const Content = styled.textarea`
  width: 100%;
  padding: 10px 20px;
  outline: none;
  border: none;
  background-color: #fafafa;
  margin: 0 15px 15px 0;
  border-radius: 4px;
  font-size: 16px;
  color: rgb(33, 37, 41);
  line-height: 1.75;
  word-break: break-all;
  ::placeholder {
    color: #adb5bd;
  }
`;

const Hr = styled.hr`
  width: 100%;
  margin-bottom: 20px;
  border-bottom: 1px solid rgb(233, 236, 239);
`;

const BtnBox = styled.div`
  button {
    height: 40px;
    width: 100px;
  }
`;

export default WorryCreateUpdate;
