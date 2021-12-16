import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import Left from "../assets/left.svg";
import SelectViewCount from "../components/SelectViewCount";
import SelectDate from "../components/SelectDate";

const SelectBoard = (props) => {
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
        <span>A / B 게시판</span>
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
          {index === 0 ? <SelectDate /> : <SelectViewCount />}
        </ArrayWrapper>
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
  height: 30px;
  margin-right: 10px;
  padding-top: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  ${(props) =>
    props.active
      ? "color: red; font-weight: 800;"
      : "color: black; font-weight: 400;"};
`;

const ArrayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  /* justify-content: center; */
`;

export default SelectBoard;
