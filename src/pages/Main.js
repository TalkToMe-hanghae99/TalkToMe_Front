import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import Header from "../components/Header";
import choice from "../assets/choice.svg";
import writing from "../assets/writing.svg";
import clickImg from "../assets/click.svg";

function Main() {
  const history = useHistory();

  return (
    <Container>
      <Header />
      <Content>
        <WorryBox
          onClick={() => {
            history.push("/worrywrite");
          }}
        >
          <p>담아두지말고 톡톡!</p>
          <img src={writing} />
          <Click>
            <p>Click</p>
            <img src={clickImg} />
          </Click>
        </WorryBox>
        <SelectBox
          onClick={() => {
            history.push("/selectwrite");
          }}
        >
          <p>A냐B냐 그것이 문제로다</p>
          <img src={choice} />
          <Click>
            <p>Click</p>
            <img src={clickImg} />
          </Click>
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
  margin-top: 75px;
  margin: auto;
`;

const WorryBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 270px;
  border: 2px solid #f2138c;
  border-radius: 20px;
  margin-bottom: 20px;

  p {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
  }

  img {
    width: 60%;
  }

  :hover {
    cursor: pointer;
    border: 5px solid #f2138c;
  }
`;

const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 270px;
  border: 2px solid #f2138c;
  border-radius: 20px;

  p {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
  }

  img {
    width: 60%;
  }

  :hover {
    cursor: pointer;
    border: 5px solid #f2138c;
  }
`;

const Click = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 30px;
  }

  img {
    width: 30px;
    height: 30px;
  }
`;

export default Main;
