import styled from "styled-components"
import { history } from "../redux/configureStore";

function MainCardConcern(props){
    return(
        <CardBox onClick={()=>{history.push(`/board/${props.List?.boardId}`)}}>
            <Title>{props.List?.boardTitle}</Title>
            <Text>조회수 {props.List?.boardViewCount}</Text>
            <Text>{props.List.createdAt.slice(0,10)}</Text>
            <Text>댓글수 {props.List?.commentCount}</Text>
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