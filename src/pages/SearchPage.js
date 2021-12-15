import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchInput from "../components/SearchInput";
import Header from "../components/Header";
import { instance } from "../common/api";
import MainCardConcern from "../components/MainCardConcern";
import MainCardSelect from "../components/MainCardSelect";

function SearchPage() {
  const [worryList, setWorryList] = useState("");
  const 연습 = [
    {
      boardId: "1",
      boardTitle: "보드타이틀1",
      viewCount: "3",
      commentCount: "5",
      createdAt: "크레이티",
    },
    {
      boardId: "2",
      boardTitle: "보드타이틀2",
      viewCount: "2",
      commentCount: "4",
      createdAt: "크레이티",
    },
    {
      boardId: "3",
      boardTitle: "보드타이틀3",
      viewCount: "1",
      commentCount: "5",
      createdAt: "크레이티",
    },
    {
      boardId: "4",
      boardTitle: "보드타이틀4",
      viewCount: "0",
      commentCount: "2",
      createdAt: "크레이티",
    },
  ];

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
    <SearchPageBox>
      <SearchInput />
      <ContentBox>
        {worryList &&
          worryList?.map((list) => (
            <MainCardSelect key={list.selectId} List={list} />
          ))}
        {연습 && 연습?.map((list) => <MainCardConcern List={list} />)}
        <PaddingBox />
      </ContentBox>
    </SearchPageBox>
  );
}
const SearchPageBox = styled.div`
  position: relative;
  width: 375px;
  margin: 0 auto;
  background-color: white;
  top: 60px;
`;

const ContentBox = styled.div`
  width: 375px;
  padding: 20px;
  position: relative;
`;

const PaddingBox = styled.div`
  height: 60px;
`;

export default SearchPage;
