import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchInput from "../components/SearchInput";
import MainCardConcern from "../components/MainCardConcern";
import MainCardSelect from "../components/MainCardSelect";
import { instance } from "../common/api";

function Main() {

  const [worryList, setWorryList] = useState("")

  useEffect(()=>{
    const getWorryList = async()=>{
      try{
        const response = await instance.get(
          '`http://ozam.shop/board?sort=${sort}&page=${page}`'
        );
        setWorryList(response.data);
      }catch{
        console.log(worryList)
      }
      console.log(worryList)
    };
    getWorryList();
  },[]);
  console.log("worryList", worryList);

  return (
    <MainBox>
      <SearchInput />
      <ContentBox>
        <MainCardSelect />
        <PageNation>
          <Page>인기순</Page>
          <Page>최신순</Page>
          <Page>댓글순</Page>
        </PageNation>
        <MainCardConcern />
        <MainCardConcern />
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
  height: 100vh;
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
