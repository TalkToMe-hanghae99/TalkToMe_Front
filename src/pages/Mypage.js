import React, { useState } from "react";
import styled from "styled-components";
import { MySelect } from "../components/MySelect";
import { MyWrite } from "../components/MyWrite";
import { NameCorrection } from "../components/NameCorrection";
import { SelectWrite } from "./SelectWrite";

export const Mypage = (props) => {
  //탭 바꾸기
  const [select, setSelect] = useState(true);
  const [write, setWrite] = useState(false);

  //닉네임 바꾸기
  const [name, setName] = useState(false);

  //나의 선택카드
  const selectBtn = () => {
    if (select === false && write === true) {
      setWrite(false);
      setSelect(true);
    }
  };
  // 나의 작성 버튼
  const writeBtn = () => {
    if (write === false && select === true) {
      setSelect(false);
      setWrite(true);
    }
  };

  //수정버튼
  const updateBtn = () => {
    if (name === false) {
      setName(true);
    }
  };
  return (
    <Color>
      <Container>
        <Grid>
          <Name>닉네임 </Name>
          <Honorific>님</Honorific>
        </Grid>
        <Button onClick={updateBtn}>수정하기</Button>
        <Flat>
          <Text margin="0 10px 0 0" onClick={selectBtn}>
            나의 선택지
          </Text>
          <Text onClick={writeBtn}>나의 고민거리</Text>
        </Flat>
        {/* 버튼 탭 */}
        {select && <MySelect />}
        {write && <MyWrite />}

        {/* 수정버튼 */}
        {name && <NameCorrection />}
      </Container>
    </Color>
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

const Color = styled.div`
  background-color: white;
  min-height: 558px;
`;
