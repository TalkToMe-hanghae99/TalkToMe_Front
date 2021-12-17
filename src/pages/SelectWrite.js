import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Left from "../assets/left.svg";
import { instance } from "../common/api";
import { useHistory } from "react-router";
import { history } from "../redux/configureStore";

export const SelectWrite = (props) => {
  const history = useHistory();
  const [TitleValue, setTitleValue] = useState(null);
  const [ContentValue, setContentValue] = useState(null);
  const [endDate, setEndDate] = useState("");
  const [SelectValue01, setSelectValue01] = useState(null);
  const [SelectValue02, setSelectValue02] = useState(null);

  let today = new Date();
  console.log(today);
  let year = today.getFullYear().toString();
  let month = today.getMonth().toString();
  let date = today.getDate().toString();

  console.log("today", year + month + date);

  async function postSelect() {
    try {
      const response = await instance.post(
        "/select/write",
        JSON.stringify({
          selectTitle: TitleValue,
          selectDesc: ContentValue,
          option1: SelectValue01,
          option2: SelectValue02,
          endDate: endDate,
        })
      );
      alert("선택지 작성을 성공하였습니다.");
      history.push("/selectboard");
      return response;
    } catch {
      alert("선택지 내용을 입력해 주세요");
    }
  }

  function onTitleChange(e) {
    setTitleValue(e.target.value);
  }

  function onContentChange(e) {
    setContentValue(e.target.value);
  }

  function onSelectValue01(e) {
    setSelectValue01(e.target.value);
  }
  function onSelectValue02(e) {
    setSelectValue02(e.target.value);
  }

  return (
    <div>
      <Header>
        <img
          src={Left}
          onClick={() => {
            history.push("/main");
          }}
          alt="옆으로"
        />
        <span>A / B 작성하기</span>
      </Header>
      <Container>
        <Input
          onChange={onTitleChange}
          value={TitleValue}
          placeholder="투표 제목을 입력하세요."
        ></Input>
        <Border />
        <Textarea
          onChange={onContentChange}
          value={ContentValue}
          placeholder="고민을 적어보세요."
        />
        <Lavel>A 선택지</Lavel>
        <Select01
          placeholder="선택지를 적어보세요."
          value={SelectValue01}
          onChange={onSelectValue01}
        />
        <Lavel>B 선택지</Lavel>
        <Select02
          placeholder="선택지를 적어보세요."
          value={SelectValue02}
          onChange={onSelectValue02}
        />
        <Flat justify="space-between">
          <Button onClick={postSelect}>작성 완료</Button>
          <Button
            onClick={() => {
              history.replace("/main");
            }}
          >
            취소
          </Button>
        </Flat>
      </Container>
    </div>
  );
};

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 100vh;
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
const Input = styled.input`
  width: 100%;
  height: 40px;
  margin: 70px auto;
  margin-bottom: 00px;
  border: #e7e7e7;
  font-size: 16px;
  font-weight: bold;
  background-color: #fafafa;
`;

const Border = styled.div`
  width: 100%;
  border: 1px solid #e7e7e7;
  margin: 40px 0;
  background-color: red;
`;
const Textarea = styled.textarea`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 10px;
  height: 300px;
  font-size: 15px;
  border: #e7e7e7;
  background-color: #fafafa;
`;
const Flat = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  margin: 10px 0;
`;

const Lavel = styled.div`
  height: 25px;
  width: 100px;
  margin: 15px 15px 15px 0px;
`;

const Select01 = styled.input`
  height: 35px;
  width: 100%;
  border: 1px solid #e1e1e1;
  margin-bottom: 12px;
`;
const Select02 = styled.input`
  height: 35px;
  width: 100%;
  border: 1px solid #e1e1e1;
  margin-bottom: 12px;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  background: #e9e9e9;
  border: none;
  font-weight: bold;
  margin: 20px 20px;
  background-color: pink;
  color: white;
  font-weight: bold;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
`;
