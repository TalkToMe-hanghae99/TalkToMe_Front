import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import SearchInput from "../components/SearchInput";
import { instance } from "../common/api";
import MainCardConcern from "../components/MainCardConcern";
import MainCardSelect from "../components/MainCardSelect";
import Left from "../assets/left.svg";
import eye from "../assets/eye.svg";
import clock from "../assets/clock.svg";

function SearchPage(props) {
  const history = useHistory();

  const [data, setData] = useState([]);

  // const [worryList, setWorryList] = useState("");
  // const [selectList, setSelectList] = useState("");

  // useEffect(() => {
  //   const getWorryList = async () => {
  //     try {
  //       const response = await instance.get("/board?sort=date");
  //       const resData = response.data.boardViewList;
  //       const Filter = resData.filter((res) => res === data);

  //       console.log("하이고", Filter);
  //       // setWorryList(response.data.boardViewList);
  //       // setWorryList(response.data.searchList);
  //     } catch (err) {
  //       console.log("고민 get 실패", err);
  //     }
  //   };
  //   getWorryList();
  // }, []);

  // useEffect(() => {
  //   const getSelectList = async () => {
  //     try {
  //       const response = await instance.get("/select?sort=date");
  //       setSelectList(response.data.selectsList);
  //     } catch (err) {
  //       console.log("선택 get 실패", err);
  //     }
  //   };
  //   getSelectList();
  // }, []);
  // console.log("selectList", selectList);

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
        <SearchInput setData={setData} />
        {/* {data.group === "board"
          ? data.searchList?.map((item, idx) => (
              <MainCardConcern key={idx} {...item} />
            ))
          : data.searchList?.map((item, idx) => (
              <MainCardSelect key={idx} {...item} />
            ))} */}

        {/* {selectList && selectList?.map((item, idx) => <MainCardSelect key={idx} />)} */}
        {/* {worryList && worryList?.map((list) => <MainCardConcern List={list} />)} */}
        {/* <PaddingBox /> */}

        {data.group === "board" && (
          <CardBox
          // onClick={() => {
          //   history.push(`/board/${props.List?.boardId}`);
          // }}
          >
            <Top>
              <span>
                <img src={clock} />
                시간
                {/* {props.List?.createdAt.slice(0, 10)} */}
              </span>
              <span>
                <img src={eye} />
                조회수
                {/* {props.List?.boardViewCount} */}
              </span>
            </Top>
            <Bottom>
              <Title>
                제목
                {/* {props.List?.boardTitle} */}
              </Title>
              <Comment>
                <p>0{/* {props.List?.commentCount} */}</p>
                <span>댓글</span>
              </Comment>
            </Bottom>
          </CardBox>
        )}
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

const CardBox = styled.div`
  width: 335px;
  height: 110px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  margin: 0px auto;
  margin-bottom: 20px;
  border: 1px solid #e9e9e9;
  border-radius: 5px;

  :hover {
    cursor: pointer;
    background-color: #ffefe3;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  span {
    display: flex;
    color: gray;

    img {
      width: 16px;
      margin-right: 5px;
    }
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 18px;
  margin: 0;
`;

const Comment = styled.div`
  width: 50px;
  height: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  border-radius: 10px;

  p {
    font-weight: bold;
    margin: 0;
  }

  span {
    font-size: 12px;
  }
`;

export default SearchPage;
