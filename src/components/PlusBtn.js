import React, { useState } from "react";
import styled from "styled-components";
import { CreatList } from "./CreatList";

const PlusBtn = (props) => {
  const [countList, setCountList] = useState([0]);
  console.log(countList, "후후");
  console.log(props.ContentValue)

  //버튼
  const onAddInput = () => {
    if (countList.length < 5) {
      let countArr = [...countList];
      let counter = countArr.slice(-1)[0];
      counter += 1;
      countArr.push(counter);
      setCountList(countArr);
    }
    if (countList.length > 4) {
      window.alert("5개 초과는 안됩니다.");
    }
  };
  return (
    <CreateListDiv>
      <CreatList countList={countList} />
      <Button onClick={onAddInput}>추가</Button>
    </CreateListDiv>
  );
};

export default PlusBtn;

const Button = styled.button`
  width: 140px;
  height: 40px;
  background: #e9e9e9;
  border: none;
  font-weight: bold;
  margin: 5px 15px;
`;

const CreateListDiv = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
