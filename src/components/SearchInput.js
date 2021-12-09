import styled from "styled-components"

function SearchInput () {
    return (
        <SearchBox>
            <Search></Search>
        </SearchBox>
    )

}
const SearchBox = styled.div`
z-index:5;
position:fixed;
top:50px;
width:375px;
height:80px;
background-color:gray;
`
const Search = styled.input`
margin:20px;
width:270px;
height:30px;
`

export default SearchInput;