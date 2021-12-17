import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

import Left from "../assets/left.svg";

export const Mypage = (props) => {
  const history = useHistory();
  const nickname = useSelector((state) => state.user);
  console.log("ddd", nickname);

  const handleClickLogOut = () => {
    const result = window.confirm("로그아웃을 하시겠습니까?");

    if (result) {
      localStorage.removeItem("accessToken");
      history.push("/");
    }
  };

  return (
    <Container>
      <Header>
        <img
          src={Left}
          onClick={() => {
            history.goBack();
          }}
        />
        <span>내정보</span>
      </Header>
      <Content>
        <UserInfo>
          <span>회원</span>
          <button>닉네임 수정</button>
        </UserInfo>
        <LogOut onClick={handleClickLogOut}>Logout</LogOut>
      </Content>
    </Container>
  );
};

const Container = styled.div`
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 75px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: bold;
`;

const LogOut = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 80px;
  font-size: 20px;
  font-weight: bold;
  background-color: teal;
  border-radius: 20px;
  cursor: pointer;
`;

export default Mypage;
