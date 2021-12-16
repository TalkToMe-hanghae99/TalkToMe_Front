import React, { useState, useEffect } from "react";
import styled from "styled-components";

import MainCardConcern from "../components/MainCardConcern";
import MainCardSelect from "../components/MainCardSelect";
import { instance } from "../common/api";
import { history } from "../redux/configureStore";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as main } from "../redux/modules/select";
import Header from "../components/Header";

function Main() {
  const [selectList, setSelectList] = useState("");
  const [worryList, setWorryList] = useState("");
  

  useEffect(() => {
    const getSelectList = async () => {
      try {
        const response = await instance.get(
          "http://ozam.shop/select?sort=date"
        );
        setSelectList(response.data.selectsList);
      } catch {
        console.log("선택지 get 오류");
      }
    };
    getSelectList();
  }, []);

  useEffect(() => {
    const getWorryList = async () => {
      try {
        const response = await instance.get("http://ozam.shop/board?sort=date");
        setWorryList(response.data.boardViewList);
        
      } catch {
        console.log("고민 get 실패");
      }
    };
    getWorryList();
  }, []);

  return (
    <MainBox>
      <Header />
      <ContentBox>
        {selectList &&
          selectList?.map((list) => (
            <MainCardSelect key={list.selectId} List={list} />
          ))}

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
        {worryList && worryList?.map((list) => <MainCardConcern key={list.boardId} List={list} />)}
        <PaddingBox />
      </ContentBox>
    </MainBox>
  );
}

const MainBox = styled.div`
  width: 375px;
  margin: 0 auto;
`;
const ContentBox = styled.div`
  position: absolute;
  top: 75px;
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

const PaddingBox = styled.div`
  height: 60px;
`;

export default Main;
