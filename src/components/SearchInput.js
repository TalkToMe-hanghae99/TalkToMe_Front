import React, { useState } from "react";
import styled from "styled-components";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import searchImg from "../assets/search.svg";

function SearchInput() {
  //drop box
  const [select, setSelect] = useState("");

  const handleSelectChange = (event) => {
    setSelect(event.target.value);
  };

  //search bar
  const [searchTxt, setSearchTxt] = useState("");

  const hadleSearchChange = (e) => {
    setSearchTxt(e.target.value);
  };

  //search Btn
  const clickSearch = () => {
    const search = {
      select: select,
      searchTxt: searchTxt,
    };

    // const postSearch = async () => {
    //   try {
    //   } catch {}
    // };
    console.log("잘나오나요", search);
  };

  return (
    <SearchBox>
      <div>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label">선택</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={select}
            onChange={handleSelectChange}
            autoWidth
            label="select"
          >
            <MenuItem value={1}>고민 톡톡</MenuItem>
            <MenuItem value={2}>고민 A/B</MenuItem>
          </Select>
        </FormControl>
      </div>
      <SearchBar onChange={hadleSearchChange} />
      <Img src={searchImg} onClick={clickSearch} />
    </SearchBox>
  );
}
const SearchBox = styled.div`
  z-index: 5;
  position: fixed;
  top: 0px;
  width: 375px;
  height: 75px;
  background-color: white;
  border-bottom: 1px solid #e3e3e3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
const SearchBar = styled.input`
  width: 100%;
  height: 30px;
`;

const Img = styled.img`
  width: 30px;
  margin-left: 5px;
  cursor: pointer;
`;
export default SearchInput;
