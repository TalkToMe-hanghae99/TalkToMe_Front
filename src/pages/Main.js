import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchInput from "../components/SearchInput";
import MainCardConcern from "../components/MainCardConcern";
import MainCardSelect from "../components/MainCardSelect";
import { instance } from "../common/api";
import { history } from "../redux/configureStore";
import { Link } from "react-router-dom";

function Main() {
  const [worryList, setWorryList] = useState("");
  const 연습 = [
    {
      boardId: "1",
      boardTitle: "보드타이틀1",
      viewCount: "3",
      createdAt: "크레이티",
    },
    {
      boardId: "2",
      boardTitle: "보드타이틀2",
      viewCount: "2",
      createdAt: "크레이티",
    },
    {
      boardId: "3",
      boardTitle: "보드타이틀3",
      viewCount: "1",
      createdAt: "크레이티",
    },
    {
      boardId: "4",
      boardTitle: "보드타이틀4",
      viewCount: "0",
      createdAt: "크레이티",
    },
  ];

  console.log("연습", 연습);
  function 인기순() {
    연습.sort(function (a, b) {
      return a.viewCount - b.viewCount;
    });
  }

  useEffect(() => {
    const getWorryList = async () => {
      try {
        const response = await instance.get(
          // '`http://ozam.shop/board?sort=${sort}&page=${page}`'
          "http://ozam.shop/select?sort=date"
        );
        setWorryList(response.data.selectsList);
        console.log(response.data.selectsList);
      } catch {
        console.log(worryList);
      }
      console.log(worryList);
    };
    getWorryList();
  }, []);
  console.log("worryList", worryList);

  return (
    <MainBox>
      <SearchInput />
      <ContentBox>
        {worryList &&
          worryList.map((list) => (
            <MainCardSelect key={list.selectId} List={list} />
          ))}

        <PageNation>
          <Page
            onClick={() => {
              console.log("인기순");
            }}
          >
            인기순
          </Page>
          <Page
            onClick={() => {
              console.log("최신수");
            }}
          >
            최신순
          </Page>
          <Page
            onClick={() => {
              console.log("댓글순");
            }}
          >
            댓글순
          </Page>
        </PageNation>
        <MainCardConcern List={연습} />
        {연습 && 연습.map((list) => <MainCardConcern List={list} />)}
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

export default Main;
