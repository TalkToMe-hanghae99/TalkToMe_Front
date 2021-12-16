import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import Left from "../assets/left.svg";
import MainCardSelect from "../components/MainCardSelect";
import { instance } from "../common/api";

const SelectBoard = (props) => {
  const history = useHistory();

  const [selectList, setSelectList] = useState("");

  useEffect(() => {
    const getSelectList = async () => {
      try {
        const response = await instance.get(
          "http://ozam.shop/select?sort=date"
        );
        setSelectList(response.data.selectsList);
      } catch (error) {
        console.log("선택지 get 오류", error.response);
      }
    };
    getSelectList();
  }, []);

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
        <PageNation>
          <Page
            onClick={() => {
              console.log("최신순");
            }}
          >
            최신순
          </Page>
          <Page
            onClick={() => {
              console.log("인기순");
            }}
          >
            인기순
          </Page>
          <Page
            onClick={() => {
              console.log("댓글순");
            }}
          >
            댓글순
          </Page>
        </PageNation>
        {selectList &&
          selectList?.map((list) => (
            <MainCardSelect key={list.selectId} List={list} />
          ))}
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

const CardBox = styled.div`
  position: absolute;
  top: 30px;
  width: 375px;
  padding: 20px;

  background-color: white;
`;

const PageNation = styled.div`
  width: 335px;
  height: 45px;
  position: relative;
  display: flex;
  flex-flow: row wrap;
`;

const Page = styled.div`
  width: 50px;
  height: 30px;
  margin: 10px;
  font-weight: bold;
  padding-top: 3px;
`;

export default SelectBoard;
