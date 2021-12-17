import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

import Left from "../assets/left.svg";

export const Mypage = (props) => {
  const history = useHistory();
  const nickname = useSelector((state) => state.user?.user?.nickname);

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
          <Circle>
            <span>{nickname}</span>
          </Circle>
        </UserInfo>

        <Text>
          {nickname}님!
          <br />
          마음털어 놓을 곳이 없다면
          <br />
          언제든지 다시 찾아주세요🥰
          <br />
          톡투미는 항상 들을 준비가 되어있답니다.
        </Text>
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
  justify-content: center;
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
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  button {
    font-size: 16px;
    padding: 5px 10px;
  }
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 160px;
  background-color: #f2158d;
  color: white;
  border-radius: 50%;
  margin-bottom: 20px;

  span {
    font-size: 3rem;
    font-weight: bold;
  }
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 20px;
`;

const LogOut = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 80px;
  font-size: 20px;
  font-weight: bold;
  background-color: #f8f8f8;
  border-radius: 20px;
  cursor: pointer;

  :hover {
    background-color: #f1158b;
    color: white;
  }
`;

export default Mypage;
