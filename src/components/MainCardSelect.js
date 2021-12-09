import styled from "styled-components"

function MainCardSelect(){
    return(
        <CardBox>
            <Text>타이틀</Text>
            <Text>투표수 10</Text>
            <Text>2021. 12. 17</Text>
            </CardBox>
    )

}
const CardBox = styled.div`
width:310px;
height:131px;
background-color:#FFEFE3;
display:flex;
flex-flow:column wrap;
`

const Text = styled.div`
width: 120px;
font-size:15px;
height:25px;
margin:8px 15px;
`

export default MainCardSelect;