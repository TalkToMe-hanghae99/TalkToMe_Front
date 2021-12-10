import React from "react";
import styled from "styled-components";

const CommentItem = (props) => {
  return (
    <Container>
      <User>
        <UserInfo>
          <UserName>닉네임</UserName>
          <Time>1시간 전</Time>
        </UserInfo>
        <Edit>
          <span>수정</span>
          <span>삭제</span>
        </Edit>
      </User>
      <Content>댓글 내용입니다.</Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid rgb(233, 236, 239);
  padding: 15px 0;
  background-color: #fff;
`;

const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserInfo = styled.div`
  display: flex;
  font-size: 12px;
`;

const UserName = styled.div`
  font-weight: bold;
  color: rgb(52, 58, 64);
  text-align: left;
  margin-right: 5px;
`;

const Time = styled.div`
  color: rgb(134, 142, 150);
`;

const Content = styled.div`
  font-size: 16px;
  color: rgb(34, 36, 38);
  line-height: 1.7;
  word-break: keep-all;
  overflow-wrap: break-word;
  text-align: left;
  margin: 15px 0 0 0;
`;

const Edit = styled.div`
  span {
    cursor: pointer;
    font-size: 12px;
    color: #868e96;
    margin: 5px;
    :hover {
      text-decoration: underline;
      color: #b0b5c3;
    }
  }
`;

export default CommentItem;
