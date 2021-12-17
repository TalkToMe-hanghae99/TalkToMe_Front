import React from "react";
import styled from "styled-components";
import home from "../assets/home.svg";
import write from "../assets/write.svg";
import search from "../assets/search.svg";
import profile from "../assets/profile.svg";
import vote from "../assets/vote.svg";
import { useHistory } from "react-router";

const Footer = (props) => {
  const history = useHistory();

  return (
    <FooterBox>
      <Button onClick={() => history.push("/main")}>
        <Img src={home} alt="home" />
        <Text>홈</Text>
      </Button>

      <Button
        onClick={() => {
          history.push("/worryboard");
        }}
      >
        <Img src={write} alt="write" />
        <Text>톡톡 게시판</Text>
      </Button>
      <Button
        onClick={() => {
          history.push("/selectboard");
        }}
      >
        <Img src={vote} alt="vote" />
        <Text>A/B 게시판</Text>
      </Button>
      <Button
        onClick={() => {
          history.push("/searchpage");
        }}
      >
        <Img src={search} alt="search" />
        <Text>검색</Text>
      </Button>
      <Button
        onClick={() => {
          history.push("/mypage");
        }}
      >
        <Img src={profile} alt="profile" />
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
  background-color: #fcc2ce;
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

  :hover {
    filter: invert(35%) sepia(86%) saturate(7440%) hue-rotate(315deg)
      brightness(95%) contrast(99%);
  }
`;

const Text = styled.div`
  text-align: center;
  padding-top: 6px;
  width: 70px;
  font-size: 13px;
`;
