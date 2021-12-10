import React, { useState } from "react";
import styled from "styled-components";
import { CreatList } from "./CreatList";

const PlusBtn = (props) => {
  const [countList, setCountList] = useState([0]);
  console.log(countList.length, "후후");

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
  width: 120px;
  height: 50px;
  background: #e9e9e9;
  border: none;
  font-weight: bold;
  margin: 20px 15px;
`;

const CreateListDiv = styled.div`
  padding: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
