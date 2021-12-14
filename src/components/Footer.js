import React from "react";
import styled from "styled-components";
import home from "../assets/home.jpg";
import write from "../assets/write.png";
import search from "../assets/search.png";
import user from "../assets/user.png";
import { useHistory } from "react-router";
// import { history } from "../redux/configureStore";

const Footer = (props) => {
  const history = useHistory();
  return (
    <FooterBox>
      {/* 메인 */}
      <Button onClick={() => history.push("/main")}>
        <Img src={home} alt="home" />

        <Text>홈</Text>
      </Button>

      <Button
        onClick={() => {
          history.push("/worrywrite");
        }}
      >
        <Img src={write} alt="home" />
        <Text>고민 작성</Text>
      </Button>
      <Button
        onClick={() => {
          history.push("/selectwrite");
        }}
      >
        <Img src={write} alt="home" />
        <Text>선택 작성</Text>
      </Button>
      <Button
        onClick={() => {
          history.push("/searchpage");
        }}
      >
        <Img src={search} alt="home" />
        <Text>검색</Text>
      </Button>
      <Button
        onClick={() => {
          history.push("/mypage");
        }}
      >
        <Img src={user} />
        <Text>프로필</Text>
      </Button>
    </FooterBox>
  );
};
export default Footer;
const FooterBox = styled.div`
  position: fixed;
  bottom: 0;
  width: 375px;
  z-index: 5;
  height: 75px;
  background-color: white;
  display: flex;
  flex-flow: row wrap;
  border-top: 1px solid #e9e9e9;
  border-radius: 12px 12px 0 0;
`;
const Button = styled.div`
  width: 70px;
  height: 60px;
  margin: 2.5px;
  display: flex;
  padding-top: 10px;
  flex-flow: row wrap;
  font-weight: bold;
  line-height: 20px;
`;
const Img = styled.img`
  width: 26px;
  height: 26px;
  margin: 0 auto;
`;
const Text = styled.div`
  text-align: center;
  padding-top: 6px;
  width: 70px;
  font-size: 13px;
`;
