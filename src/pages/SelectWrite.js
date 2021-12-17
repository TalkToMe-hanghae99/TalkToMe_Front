import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Calendar } from "../components/Calendar";
import Left from "../assets/left.svg";
import { instance } from "../common/api";
import { useHistory } from "react-router";
import { history } from "../redux/configureStore";

export const SelectWrite = (props) => {
  const history = useHistory();
  const [TitleValue, setTitleValue] = useState(null);
  const [ContentValue, setContentValue] = useState(null);
  const [CalenderValue, setCalenderValue] = useState(null);
  const [SelectValue01, setSelectValue01] = useState(null);
  const [SelectValue02, setSelectValue02] = useState(null);

  let today = new Date();
  console.log(today);
  let year = today.getFullYear().toString();
  let month = today.getMonth().toString();
  let date = today.getDate().toString();

  console.log("today", year + month + date);

  ////

  const [endDate, setEndDate] = useState(null);

  console.log("selectWrite_setEndDate", endDate);

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
      history.push("/main");
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

  function onCalenderValue(e) {
    setCalenderValue(e.target.value);
  }
  function onSelectValue01(e) {
    setSelectValue01(e.target.value);
  }
  function onSelectValue02(e) {
    setSelectValue02(e.target.value);
  }

  return (
    <Container>
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
      <Input
        onChange={onTitleChange}
        value={TitleValue}
        placeholder="투표 제목을 입력하세요."
      ></Input>
      <Days>
        {year} - {month} - {date}
      </Days>
      <Border />
      <Textarea
        onChange={onContentChange}
        value={ContentValue}
        placeholder="고민을 적어보세요."
      />
      <Select01
        placeholder="선택지를 적어보세요."
        value={SelectValue01}
        onChange={onSelectValue01}
      />
      <Select02
        placeholder="선택지를 적어보세요."
        value={SelectValue02}
        onChange={onSelectValue02}
      />
      <Calendar
        value={CalenderValue}
        onChange={onCalenderValue}
        setEndDate={setEndDate}
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
  );
};

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 100vh;
  background-color: white;
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
  width: 335px;
  height: 40px;
  margin: 0 auto;
  margin-top: 60px;
  border: #e7e7e7;
  font-size: 16px;
  font-weight: bold;
`;

const Days = styled.div`
  color: #858585;
  display: flex;
  justify-content: flex-end;
`;

const Border = styled.div`
  width: 100%;
  border: 1px solid #e7e7e7;
  margin-bottom: 30px;
  background-color: red;
`;
const Textarea = styled.textarea`
  width: 335px;
  margin: 0 auto;
  margin-bottom: 10px;
  height: 300px;
  font-size: 15px;
  border: #e7e7e7;
`;
const Flat = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  margin: 10px 0;
`;
const Select01 = styled.input`
  height: 32px;
  width: 335px;
  margin: 10px auto;
`;
const Select02 = styled.input`
  height: 32px;
  width: 335px;
  margin: 10px auto;
`;

const Button = styled.button`
  width: 160px;
  height: 40px;
  background: #e9e9e9;
  border: none;
  font-weight: bold;
  margin: 20px 20px;
`;
