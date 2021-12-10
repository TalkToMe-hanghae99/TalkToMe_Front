import React, { useState } from "react";
import styled from "styled-components";

export const NameCorrection = (props) => {
  //닉네임
  const [name, setName] = useState("");

  //입력체크
  const submitBtn = (e) => {
    if (!name) {
      window.alert("닉네임을 적어주세요");
    }

    //수정될 정보
    const updateDB = {
      name,
    };
    //이안에서 dispatch
  };

  return (
    <>
      <Grid>
        <Name value={name} onChange={(e) => setName(e.target.value)} />

        <Honorific>님</Honorific>
      </Grid>
      <Button>수정 완료</Button>
    </>
  );
};

const Container = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 375px;
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
`;

const Name = styled.input`
  width: 100px;
  height: 45px;
  padding: 10px 10px;
  border: none;
  font-size: 16px;
  background: #dadada;
  text-align: center;
  font-weight: bold;
`;

const Honorific = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

const Button = styled.button`
  color: #858585;
  border: none;
  margin-left: 200px;
`;
