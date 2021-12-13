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
          <Page>인기순</Page>
          <Page>최신순</Page>
          <Page>댓글순</Page>
        </PageNation>
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
