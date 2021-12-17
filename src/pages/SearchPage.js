import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import SearchInput from "../components/SearchInput";
import { instance } from "../common/api";
import MainCardConcern from "../components/MainCardConcern";
import MainCardSelect from "../components/MainCardSelect";
import Left from "../assets/left.svg";

function SearchPage() {
  const history = useHistory();

  const [selectList, setSelectList] = useState("");
  const [worryList, setWorryList] = useState("");

  useEffect(() => {
    const getWorryList = async () => {
      try {
        const response = await instance.get("/board?sort=date");
        setWorryList(response.data.boardViewList);
      } catch (err) {
        console.log("고민 get 실패", err);
      }
    };
    getWorryList();
  }, []);

  useEffect(() => {
    const getSelectList = async () => {
      try {
        const response = await instance.get("/select?sort=date");
        setSelectList(response.data.selectsList);
      } catch (err) {
        console.log("선택 get 실패", err);
      }
    };
    getSelectList();
  }, []);
  console.log("selectList", selectList);

  return (
    <SearchPageBox>
      <Header>
        <img
          src={Left}
          onClick={() => {
            history.goBack();
          }}
        />
        <span>검색</span>
      </Header>
      <ContentBox>
        <SearchInput />
        {selectList &&
          selectList?.map((list) => (
            <MainCardSelect key={list.selectId} List={list} />
          ))}
        {worryList && worryList?.map((list) => <MainCardConcern List={list} />)}
        <PaddingBox />
      </ContentBox>
    </SearchPageBox>
  );
}
const SearchPageBox = styled.div`
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

const ContentBox = styled.div`
  margin-top: 40px;
  width: 375px;
  background-color: white;
`;

const PaddingBox = styled.div`
  height: 60px;
`;

export default SearchPage;
