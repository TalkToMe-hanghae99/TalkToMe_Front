import React from "react";
import styled from "styled-components";

export const CreatList = (props) => {
  return (
    <Detail>
      {props.countList &&
        props.countList.map((item, i) => (
          <div key={i}>
            <div>
              <InputPlus placeholder="항목 입력"/>
            </div>
          </div>
        ))}
    </Detail>
  );
};

const Detail = styled.div`
  div {
    margin-bottom: 0.5rem;
    width: 320px;
  }
`;

const InputPlus = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 5px;
  padding-left:10px;
  border:1px solid #E3E3E3;
`;
