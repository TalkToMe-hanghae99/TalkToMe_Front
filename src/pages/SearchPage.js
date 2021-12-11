import React from "react";
import styled from "styled-components";
import SearchInput from "../components/SearchInput";
import Header from "../components/Header";
import MainCardConcern from "../components/MainCardConcern";

function SearchPage() {
  return (
    <SearchPageBox>
      <Header />
      <SearchInput />
      <ContentBox>
        <PageNation>
          <Page>고민</Page>
          <Page>선택지</Page>
        </PageNation>
        <MainCardConcern />
        <MainCardConcern />
        <MainCardConcern />
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
  height: 100vh;
  padding: 20px;
  position: relative;
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

export default SearchPage;
