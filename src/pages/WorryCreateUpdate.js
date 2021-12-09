import React from "react";
import styled from "styled-components";

const WorryCreateUpdate = (props) => {
  return (
    <Container>
      <Title type="text" placeholder="제목을 입력하세요" />
      <Content type="text" placeholder="내용을 입력하세요" />
    </Container>
  );
};

const Container = styled.div`
  width: 375px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px;
`;

const Title = styled.input`
  width: 100%;
`;

const Content = styled.input`
  width: 100%;
`;

export default WorryCreateUpdate;
