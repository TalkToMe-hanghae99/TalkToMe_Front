import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import SearchInput from "../components/SearchInput";
import Header from "../components/Header";
import MainCardConcern from "../components/MainCardConcern";

function SearchPage() {
  return (
    <SearchPageBox>
      <Header />
      <SearchInput />
      <ContentBox>
        <MainCardConcern />
        <MainCardConcern />
        <MainCardConcern />
      </ContentBox>
      <Footer />
    </SearchPageBox>
  );
}
const SearchPageBox = styled.div`
position:relative;  
width: 375px;
  margin: 0 auto;
`;

const ContentBox = styled.div`
width:375px;
height:100vh;
position:relative;
top:130px;
`

export default SearchPage;
