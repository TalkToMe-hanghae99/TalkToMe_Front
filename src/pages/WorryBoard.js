import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import Left from "../assets/left.svg";
import WorryComment from "../components/WorryComment";
import WorryDate from "../components/WorryDate";
import WorryViewCount from "../components/WorryViewCount";

const WorryBoard = (props) => {
  const history = useHistory();

  //탭
  const [tabs, setTabs] = useState([
    {
      title: "최신순",
      active: true,
    },
    {
      title: "인기순",
      active: false,
    },
    {
      title: "댓글순",
      active: false,
    },
  ]);

  const [index, setIndex] = useState(0);

  const changeTab = (index) => {
    setTabs(
      tabs.map((tab, i) =>
        i === index ? { ...tab, active: true } : { ...tab, active: false }
      )
    );
    setIndex(index);
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
        <span>톡톡 게시판</span>
      </Header>
      <CardBox>
        <TabWrapper>
          {tabs.map((tab, idx) => (
            <Tab key={idx} onClick={() => changeTab(idx)} active={tab.active}>
              {tab.title}
            </Tab>
          ))}
        </TabWrapper>

        <ArrayWrapper>
          {index === 0 ? (
            <WorryDate />
          ) : index === 1 ? (
            <WorryViewCount />
          ) : (
            <WorryComment />
          )}
        </ArrayWrapper>
        <UpScroll
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <p>맨 위로 🔺</p>
        </UpScroll>
        <FakeDiv />
      </CardBox>
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

const CardBox = styled.div`
  position: absolute;
  top: 30px;
  width: 375px;
  padding: 20px;

  background-color: white;
`;

const TabWrapper = styled.div`
  width: 335px;
  height: 45px;
  position: relative;
  display: flex;
  flex-flow: row wrap;
`;

const Tab = styled.div`
  width: 70px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 10px 10px 0px;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  background-color: #e9e9e9;
  border-radius: 20px;

  ${(props) =>
    props.active
      ? "background-color: #F2138C; color:white;"
      : "font-weight: 400;"};
`;

const ArrayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const UpScroll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  p {
    margin: 0;
  }
`;

const FakeDiv = styled.div`
  height: 75px;
`;

export default WorryBoard;
