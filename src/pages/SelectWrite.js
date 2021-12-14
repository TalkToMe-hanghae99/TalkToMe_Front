import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Calendar } from "../components/Calendar";
import PlusBtn from "../components/PlusBtn";
import Left from "../assets/left.svg";
import axios from 'axios';
import { instance } from '../common/api';
import { history } from "../redux/configureStore";

export const SelectWrite = (props) => {
  const [TitleValue, setTitleValue] = useState("");
  const [ContentValue, setContentValue] = useState("");
  const [SelectValue, setSelectValue] = useState("");

  let today = new Date();
  let year = today.getFullYear().toString();
  let month = today.getMonth().toString();
  let date = today.getDate().toString();

  
  console.log("today",(year)+(month)+(date))

 ////

  const [users, setUsers] = useState(null);
  const getToken = localStorage.getItem('accessToken');
  
  async function postSelect(){
      try{
        localStorage.getItem('accessToken')
        const response = await instance.post(
          'http://ozam.shop/select/write',
        JSON.stringify({
          selectTitle:parseInt(1),
          selectDes:ContentValue,
          option1:TitleValue,
          option2:TitleValue,
          endDate:TitleValue
          
        })
        );
        return response;
        console.log("response", response)
      }catch{
        console.log("users", users)
      }
      console.log("users",users);
    };


  function onTitleChange(e){
    setTitleValue(e.target.value);
  }

  function onContentChange(e){
    setContentValue(e.target.value);
  }

  function onSelectValue(e){
    setSelectValue(e.target.SelectValue);    
  }

  console.log("TitleValue", TitleValue);
  console.log("ContentValue", ContentValue);
  console.log("SelectValue", SelectValue);

  return (
    <Container>
      <Header>
        <img src={Left} />
        <span>톡톡 작성하기</span>
      </Header>
      <Input
        onChange={onTitleChange}
        value={TitleValue}
        placeholder="투표 제목을 입력하세요."
      ></Input>
      <Days>{year} - {month} - {date}</Days>
      <Border />
      <Textarea
        onChange={onContentChange}
        value={ContentValue}
        placeholder="고민을 적어보세요."
      />
      <PlusBtn onSelectValue={onSelectValue}
        SelectValue={SelectValue}/>
      <Calendar />
      <Flat justify="space-between">
        <Button onClick={postSelect}>작성 완료</Button>
        <Button onClick={()=>{history.push("/main")}}>취소</Button>
      </Flat>



    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 140vh;
  background-color: white;
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
  height: 300px;
  font-size: 15px;
  border: #e7e7e7;
`;
const Flat = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  margin: 10px 0;
`;

const InputPlus = styled.input`
  width: 100%;
  height: 30px;
  margin-top: 20px;
`;

const BtnPlus = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const Button = styled.button`
  width: 160px;
  height: 40px;
  background: #e9e9e9;
  border: none;
  font-weight: bold;
  margin: 20px 20px;
`;
