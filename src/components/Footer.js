import React from "react";
import styled from "styled-components";
import home from "../assets/home.jpg";
import write from "../assets/write.png";
import search from "../assets/search.png";
import user from "../assets/user.png";
import { history } from "../redux/configureStore";

function Footer(){
    return(
        <FooterBox>
            <Button onClick={()=>{history.push("/main")}}><Img src={home}/><Text>홈</Text></Button>
            <Button onClick={()=>{history.push("/worrywrite")}}><Img src={write}/><Text>고민 작성</Text></Button>
            <Button onClick={()=>{history.push("/selectwrite")}}><Img src={write}/><Text>선택 작성</Text></Button>
            <Button onClick={()=>{history.push("/searchpage")}}><Img src={search}/><Text>검색</Text></Button>
            <Button onClick={()=>{history.push("/mypage")}}><Img src={user}/><Text>프로필</Text></Button>
        </FooterBox>
    )

}
const FooterBox = styled.div`
position:fixed;
bottom:0;
width:375px;
z-index:5;
height:75px;
background-color:white;
display:flex;
flex-flow:row wrap;
border-top:1px solid #E9E9E9;
border-radius:12px 12px 0 0;
`
const Button = styled.div`
width:70px;
height:60px;
margin:2.5px;
display:flex;
padding-top:10px;
flex-flow:row wrap;
font-weight:bold;
line-height:20px;
`
const Img = styled.img`
width:26px;
height:26px;
margin:0 auto;
`
const Text = styled.div`
text-align:center;
padding-top:6px;
width:70px;
font-size:13px;
`

export default Footer;