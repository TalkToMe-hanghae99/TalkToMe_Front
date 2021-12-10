import React from "react";
import styled from "styled-components";

export const CreatList = (props) => {
  return (
    <Detail>
      {props.countList &&
        props.countList.map((item, i) => (
          <div key={i}>
            <div>
              <InputPlus />
            </div>
          </div>
        ))}
    </Detail>
  );
};

const Detail = styled.div`
  div {
    margin-bottom: 2rem;
    width: 320px;
  }
`;

const InputPlus = styled.input`
  width: 100%;
  height: 30px;
  margin-top: 5px;
`;
