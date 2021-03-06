import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";

import Left from "../assets/left.svg";
import { actionCreators as worryCr } from "../redux/modules/worrywrite";
const WorryCreateUpdate = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [boardTitle, setboardTitle] = useState("");
  const [boardDesc, setboardDesc] = useState("");

  //바튼
  const submitBtn = (e) => {
    if (!boardDesc) {
      window.alert("내용을 적어주세요");
      return;
    } else {
      const worryInfo = {
        boardTitle,
        boardDesc,
      };
      dispatch(worryCr.postWriteAPI(worryInfo));
    }
  };

  return (
    <Container>
      <Header>
        <img
          src={Left}
          onClick={() => {
            history.goBack();
          }}
        />
        <span>톡톡 작성하기</span>
      </Header>
      <WriteBox>
        <Title
          type="text"
          onChange={(e) => {
            setboardTitle(e.target.value);
          }}
          value={boardTitle}
          placeholder="제목을 입력하세요."
        ></Title>
        <Hr />
        <Content
          type="text"
          placeholder="내용을 입력하세요."
          rows="10"
          onChange={(e) => {
            setboardDesc(e.target.value);
          }}
          value={boardDesc}
        ></Content>
        <Hr />
      </WriteBox>
      <BtnBox>
        <button onClick={submitBtn}>작성완료</button>
        <button
          onClick={() => {
            history.push("/main");
          }}
        >
          취소
        </button>
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
  padding: 30px;
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  z-index: 5;
  background-color: #9ddbf6;
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
  margin-top: 130px;
`;

const Title = styled.input`
  height: 40px;
  width: 100%;
  padding: 10px 20px;
  outline: none;
  border: none;
  background-color: #fafafa;
  margin: 0 15px 35px 0;
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
  margin: 20px 15px 35px 0;
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
    width: 135px;
    margin: 25px 10px;
    border-radius: 5px;
    border: none;
    background-color: pink;
    color: white;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
  }
`;

export default WorryCreateUpdate;
