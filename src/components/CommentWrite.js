import React from "react";
import styled from "styled-components";

import CommentList from "./CommentList";

const CommentWrite = (props) => {
  return (
    <>
      <Container>
        <Count>댓글(0)</Count>
        <InputBtn>
          <Input placeholder="댓글을 입력해주세요." />
          <Button>작성</Button>
        </InputBtn>
      </Container>
      <CommentList></CommentList>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Count = styled.h4`
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  color: #64656a;
  display: block;
  text-align: left;
  margin-bottom: 10px;
`;

const InputBtn = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 5px;
`;

const Input = styled.input`
  height: 40px;
  width: 100%;
  padding: 10px 20px;
  outline: none;
  border: none;
  background-color: #fafafa;
  margin: 0 15px 15px 0;
  border-radius: 4px;
  font-size: 16px;
  color: rgb(33, 37, 41);
  line-height: 1.75;
  word-break: break-all;
  ::placeholder {
    color: #adb5bd;
  }
`;

const Button = styled.button`
  height: 40px;
  width: 15%;
  font-weight: bold;
  cursor: pointer;
  border: none;
  background: #c1c1c1;
  color: white;
  border-radius: 4px;
  font-size: 12px;
  outline: none;

  &:hover {
    background-color: #fd328b;
  }
`;

export default CommentWrite;
