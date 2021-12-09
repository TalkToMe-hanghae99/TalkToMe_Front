import styled from "styled-components"

function MainCardConcern(){
    return(
        <CardBox>
            <Text>타이틀</Text>
            <Text>조회수</Text>
            <Text>날짜</Text>
            <Text>댓글수</Text>
        </CardBox>
    )

}
const CardBox = styled.div`
width:312px; 
height:90px;
background-color:#FFEFE3;
display:flex;
flex-flow: row wrap;
`
const Text = styled.div`
width:100px;
height:20px;
margin:10px 28px;
`

export default MainCardConcern;