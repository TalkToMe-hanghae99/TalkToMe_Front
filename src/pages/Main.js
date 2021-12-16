import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import Header from "../components/Header";

function Main() {
  const history = useHistory();

  return (
    <Container>
      <Header />
      <Content>
        <WorryBox>
          <h1>고민 작성</h1>
          <button
            onClick={() => {
              history.push("/worrywrite");
            }}
          >
            GoGo
          </button>
        </WorryBox>
        <SelectBox>
          <h1>선택지 작성</h1>
          <button
            onClick={() => {
              history.push("/selectwrite");
            }}
          >
            GoGo
          </button>
        </SelectBox>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 375px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px;
`;

const Content = styled.div`
  margin-top: 100px;
`;

const WorryBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Main;
