import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import { MySelect } from "../components/MySelect";
import { MyWrite } from "../components/MyWrite";
import { NameCorrection } from "../components/NameCorrection";
import { SelectWrite } from "./SelectWrite";
import Left from "../assets/left.svg";

export const Mypage = (props) => {
  const history = useHistory();

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
        <Header>
          <img
            src={Left}
            onClick={() => {
              history.goBack();
            }}
          />
          <span>내정보</span>
        </Header>
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
