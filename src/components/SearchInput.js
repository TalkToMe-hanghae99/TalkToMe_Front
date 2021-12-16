import React, { useState } from "react";
import styled from "styled-components";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import searchImg from "../assets/search.svg";
import { apis } from "../common/api";

function SearchInput() {
  //drop box
  const [group, setGroup] = useState("");

  const handleSelectChange = (event) => {
    setGroup(event.target.value);
  };

  //search bar
  const [keyword, setKeyword] = useState("");

  const hadleSearchChange = (e) => {
    setKeyword(e.target.value);
  };

  //search Btn
  const clickSearch = async () => {
    try {
      const data = await apis.getSearch(group, keyword);
      console.log("확인해보자", data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <SearchBox>
      <div>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label">선택</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            // value={search}
            onChange={handleSelectChange}
            autoWidth
            label="search"
          >
            <MenuItem value={"board"}>고민 톡톡</MenuItem>
            <MenuItem value={"select"}>고민 A/B</MenuItem>
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
