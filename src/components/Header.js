import styled from "styled-components"

function Header(){
    return(
    <HeaderBox>
    헤더
    </HeaderBox>
    
)
}
const HeaderBox = styled.div`
position:fixed;
top:0;
z-index:5;
background-color:#FFEFE3;
width:375px;
height:50px;
`
export default Header;