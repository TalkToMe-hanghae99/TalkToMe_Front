import React from "react";
import styled from "styled-components";

export const Mypage = (props) => {
  return (
    <Container>
      <Grid>
        <Name>닉네임 </Name>
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
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

const Name = styled.p`
  padding: 10px 20px;
  background: #dadada;
  text-align: center;
  font-weight: bold;
`;
