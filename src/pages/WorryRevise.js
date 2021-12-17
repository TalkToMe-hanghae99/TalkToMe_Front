import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";

import Left from "../assets/left.svg";
import { actionCreators as worryCr } from "../redux/modules/worrywrite";
import { instance } from "../common/api";
import { useParams} from "react-router-dom";

const WorryRevise = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [boardTitle, setboardTitle] = useState(null);
  const [boardDesc, setboardDesc] = useState(null);
  const { boardId } = useParams();


//현재 작업중
  useEffect(() => {
    //고민 게시글 가져오기
    const getWorryList = async () => {
      try {
        const response = await instance.get(
          `http://ozam.shop/board/${boardId}`
        );
        console.log(response.data.boardList);
        setboardTitle(response.data.boardList.[0].boardTitle);
        setboardDesc(response.data.boardList.[0].boardDesc);
      } catch {
        console.log("실패시 게시글 리스트", boardTitle);
      }
    };
    getWorryList();
  }, []);


  async function reviseWorry() {
    try {
      const response = await instance.patch(
        `http://ozam.shop/board/${boardId}`,
        JSON.stringify({
          boardTitle: boardTitle,
          boardDesc: boardDesc
        })
      );
      alert("선택지 수정을 성공하였습니다.");
      history.push("/main");
      return response;
    } catch {
      alert("선택지 내용을 입력해 주세요");
    }
  }



  return (
    <Container>
      <Header>
        <img
          src={Left}
          onClick={() => {
            history.push("/main");
          }}
        />
        <span>톡톡 수정하기</span>
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
        <button onClick={reviseWorry}>수정 완료</button>
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
    width: 150px;
    margin:7px;
    border-radius:5px;
    border:none;
  }
`;


export default WorryRevise;
