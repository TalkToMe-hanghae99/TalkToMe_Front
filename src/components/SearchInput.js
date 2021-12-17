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
        <FormControl sx={{ m: 0.5, minWidth: 80, p: 0.5 }}>
          <InputLabel id="demo-simple-select-autowidth-label">선택</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            // value={search}
            onChange={handleSelectChange}
            autoWidth
            label="search"
            size="small"
          >
            <MenuItem value={"board"}>고민 톡톡</MenuItem>
            <MenuItem value={"select"}>고민 A/B</MenuItem>
          </Select>
        </FormControl>
      </div>
      <SearchBar onChange={hadleSearchChange} />
      <ImgBox>
        <Img src={searchImg} onClick={clickSearch} />
      </ImgBox>
    </SearchBox>
  );
}
const SearchBox = styled.div`
  width: 375px;
  height: 75px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
`;
const SearchBar = styled.input`
  width: 100%;
  height: 30px;
`;

const ImgBox = styled.div`
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e9e9e9;
  border-radius: 2px;
  margin: 0 10px;
  cursor: pointer;

  :hover {
    background-color: #f32793;
  }
`;

const Img = styled.img`
  width: 25px;
  margin-left: 5px;

  :hover {
    width: 30px;
  }
`;
export default SearchInput;
