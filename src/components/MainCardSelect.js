import styled from "styled-components"

function MainCardSelect(){
    return(
        <CardBox>
            <Title>타이틀</Title>
            <Text>투표수 10</Text>
            <Text>2021. 12. 17</Text>
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