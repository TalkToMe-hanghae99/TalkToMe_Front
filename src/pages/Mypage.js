import React, { useState } from "react";
import styled from "styled-components";
import { MySelect } from "../components/MySelect";
import { MyWrite } from "../components/MyWrite";
import { SelectWrite } from "./SelectWrite";

export const Mypage = (props) => {
  const [select, setSelect] = useState(true);
  const [write, setWrite] = useState(false);

  const selectBtn = () => {
    if (select === true) {
      setWrite(false);
    }
  };

  const writeBtn = () => {
    if (write === true) {
      setSelect(false);
    }
  };
  return (
    <Container>
      <Grid>
        <Name>닉네임 </Name>
        <Honorific>님</Honorific>
      </Grid>
      <Button>수정하기</Button>
      <Flat>
        <Text margin="0 10px 0 0" onClick={selectBtn}>
          나의 선택지
        </Text>
        <Text>나의 고민거리</Text>
      </Flat>

      {select ? <MySelect /> : <MyWrite />}
      {write ? <MyWrite /> : <MySelect />}
    </Container>
  );
};

const Container = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 375px;
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
`;

const Name = styled.p`
  width: 100px;
  padding: 10px 20px;
  background: #dadada;
  text-align: center;
  font-weight: bold;
`;

const Honorific = styled.span`
  font-size: 30px;
  font-weight: bold;
  line-height: 2.5;
`;

const Button = styled.button`
  color: #858585;
  border: none;
  margin-left: 200px;
`;

const Flat = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  margin: 10px 0;
`;

const Text = styled.div`
  font-weight: bold;
  font-size: ${(props) => props.size};
  margin: ${(props) => props.margin};
`;
