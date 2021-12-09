import React from "react";
import styled from "styled-components";

function Footer(){
    return(
        <FooterBox>
            <Button>홈</Button>
            <Button>고민 작성</Button>
            <Button>선택지 작성</Button>
            <Button>검색</Button>
            <Button>프로필</Button>
        </FooterBox>
    )

}
const FooterBox = styled.div`
position:fixed;
bottom:0;
width:375px;
z-index:5;
height:75px;
background-color:#FFEFE3;
display:flex;
flex-flow:row wrap;
`
const Button = styled.div`
width:55px;
height:55px;
margin:10px;10px;
background-color:#FFEFE3;
`
export default Footer;