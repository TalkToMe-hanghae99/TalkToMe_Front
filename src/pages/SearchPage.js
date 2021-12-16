import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchInput from "../components/SearchInput";
import Header from "../components/Header";
import { instance } from "../common/api";
import MainCardConcern from "../components/MainCardConcern";
import MainCardSelect from "../components/MainCardSelect";

function SearchPage() {
  const [selectList, setSelectList] = useState("");
  const [worryList, setWorryList] = useState("");

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

  useEffect(() => {
    const getSelectList = async () => {
      try {
        const response = await instance.get(
          // '`http://ozam.shop/board?sort=${sort}&page=${page}`'
          "http://ozam.shop/select?sort=date"
        );
        setSelectList(response.data.selectsList);
      } catch {
        console.log(selectList);
      }
    };
    getSelectList();
  }, []);
  console.log("selectList", selectList);

  return (
    <SearchPageBox>
      <SearchInput />
      <ContentBox>
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
