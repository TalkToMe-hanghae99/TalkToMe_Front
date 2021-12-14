import styled from "styled-components";
import { history } from "../redux/configureStore";

function MainCardSelect(props){
    return(
        <CardBox onClick={()=>{console.log("선택지카드")
        history.push("`/select/${props.List.selectId}`")}}>
            <Title>{props.List?.selectTitle}</Title>
            <Text>조회수 {props.List?.selectViewCount}</Text>
            <Text>{props.List?.createdAt.slice(0,10)}</Text>
            </CardBox>
    )

}
const CardBox = styled.div`
width:335px;
height:131px;
background-color:white;
display:flex;
flex-flow:column wrap;
margin:0px auto;
margin-bottom:20px;
border:1px solid #E9E9E9;
border-radius:5px;
`


const Title = styled.div`
width: 290px;
font-size:15px;
height:20px;
margin:11px 20px;
`
const Text = styled.div`
width: 110px;
font-size:15px;
height:20px;
margin:11px 20px;
`

export default MainCardSelect;