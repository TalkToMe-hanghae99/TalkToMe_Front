import styled from "styled-components";

import search from "../assets/search.png";

function SearchInput () {
    return (
        <SearchBox>
            <SearchBar></SearchBar><Img src={search}/>
        </SearchBox>
    )

}
const SearchBox = styled.div`
z-index:5;
position:fixed;
top:0px;
width:375px;
height:75px;
background-color:white;
border-bottom:1px solid #E3E3E3;
`
const SearchBar = styled.input`
margin:25px 0 20px 30px;
width:270px;
height:30px;
`
const Img =styled.img`
width:30px;
position:absolute;
top:25px;
right:25px;
`
export default SearchInput;