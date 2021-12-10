import React, { useRef, useState } from "react";
import styled from "styled-components";

export const SelectWrite = (props) => {
  return (
    <Container>
      <Input placeholder="투표 제목을 입력하세요."></Input>
      <Days>날짜</Days>

      <Border />
      <Textarea placeholder="고민을 적어봐요." />
      {/* <Flat> */}
      {/* <BtnPlus
        // onClick={() => {
        //   setPlus(true);
        //   if (plus === true) {
        //     <InputPlus />;
        //   }
        // }}
        /> */}
      {/* {plus.map((e) => {
        <InputPlus placeholder="선택1" />;
      })} */}

      {/* </Flat> */}
      <Flat justify="space-between">
        <Button>작성 완료</Button>
        <Button>취소</Button>
      </Flat>
    </Container>
  );
};

const Flat = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  margin: 10px 0;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  border: #e7e7e7;
  font-size: 16px;
  font-weight: bold;
`;

const Container = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 375px;
`;

const Border = styled.div`
  width: 100%;
  border: 1px solid #e7e7e7;
  margin-bottom: 30px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 300px;
  font-size: 15px;
  border: #e7e7e7;
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
  width: 120px;
  height: 50px;
  background: #e9e9e9;
  border: none;
  font-weight: bold;
  margin: 20px 15px;
`;

const Days = styled.div`
  color: #858585;
  display: flex;
  justify-content: flex-end;
`;
