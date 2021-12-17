/* eslint-disable */

import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import SearchInput from "../components/SearchInput";
import Left from "../assets/left.svg";
import eye from "../assets/eye.svg";
import clock from "../assets/clock.svg";

function SearchPage(props) {
  const history = useHistory();

  const [data, setData] = useState([]);

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

        {data.searchList.length === 0 ? (
          <Msg>
            <p>해당되는 검색결과가 없습니다.</p>
          </Msg>
        ) : (
          <>
            {data.group === "board" &&
              data.searchList?.map((item, idx) => (
                <CardBox
                  key={idx}
                  onClick={() => {
                    history.push(`/board/${data.searchList[idx].boardId}`);
                  }}
                >
                  <Top>
                    <span>
                      <img src={clock} />
                      {data.searchList[idx].createdAt.slice(0, 10)}
                    </span>
                    <span>
                      <img src={eye} />
                      {data.searchList[idx].boardViewCount}
                    </span>
                  </Top>
                  <Bottom>
                    <Title>{data.searchList[idx].boardTitle}</Title>
                    <Noti>
                      <p>{data.searchList[idx].commentCount}</p>
                      <span>댓글</span>
                    </Noti>
                  </Bottom>
                </CardBox>
              ))}

            {data.group === "select" &&
              data.searchList?.map((item, idx) => (
                <CardBox
                  key={idx}
                  onClick={() => {
                    history.push(`/board/${data.searchList[idx].selectId}`);
                  }}
                >
                  <Top>
                    <span>
                      <img src={clock} />
                      {data.searchList[idx].createdAt.slice(0, 10)}
                    </span>
                    <span>
                      <img src={eye} />
                      {data.searchList[idx].selectViewCount}
                    </span>
                  </Top>
                  <Bottom>
                    <Title>{data.searchList[idx].selectTitle}</Title>
                    <Noti>
                      <p>{data.searchList[idx].participationCount}</p>
                      <span>투표수</span>
                    </Noti>
                  </Bottom>
                </CardBox>
              ))}
          </>
        )}

        <FakeDiv />
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

const Msg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 20px;
    font-weight: bold;
  }
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

const Noti = styled.div`
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

const FakeDiv = styled.div`
  height: 75px;
`;

export default SearchPage;
