import styled from "styled-components"

function MainCardConcern(){
    return(
        <CardBox>
            <Title>회사생활 정말 고민입니다.</Title>
            <Text>조회수 10</Text>
            <Text>2021. 12. 17</Text>
            <Text>댓글수 10</Text>
        </CardBox>
    )

}
const CardBox = styled.div`
width:335px; 
height:95px;
background-color:white;
display:flex;
flex-flow: row wrap;
margin:0px auto;
margin-bottom:20px;
border:1px solid #E9E9E9;
border-radius:5px;
`

const Title = styled.div`
width:310px;
height:30px;
margin:15px 0px 0px 16px;
`

const Text = styled.div`
width:90px;
height:20px;
margin:5px 5px 10px 16px;
`

export default MainCardConcern;