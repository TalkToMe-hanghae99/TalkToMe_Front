import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentAction } from "../redux/modules/comment";

const CommentItem = (props) => {
  const dispatch = useDispatch();

  const loginUserId = useSelector(
    (state) => state.select.detail_list.logInUserId
  );

  const { comment, createdAt, commentId, boardId, userId } = props;

  console.log("아이디", loginUserId, userId);

  //댓글 수정
  // const [showEditInput, setShowEditInput] = useState(false);

  // const onClickEdit = () => {
  //   setShowEditInput(!showEditInput);
  //   // dispatch(commentAction.editCommentAPI(boardId, commentId));
  // };

  const onClickDelete = () => {
    const result = window.confirm("댓글을 정말로 삭제하시겠습니까?");

    if (result) {
      dispatch(commentAction.deleteCommentAPI(boardId, commentId));
    }
  };

  return (
    <Container>
      <User>
        <UserInfo>
          <UserName>익명</UserName>
          <Time>{createdAt}</Time>
        </UserInfo>
        {loginUserId === userId ? (
          <Edit>
            <span>수정</span>
            <span onClick={onClickDelete}>삭제</span>
          </Edit>
        ) : null}
      </User>
      <Content>{comment}</Content>
      {/* {showEditInput === false ? (
        <Content>{comment}</Content>
      ) : (
        <InputBtn>
          <Input placeholder="댓글을 입력해주세요." />
          <Button>수정</Button>
        </InputBtn>
      )} */}
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

const InputBtn = styled.div`
  display: flex;
  width: 100%;
  margin: 20px 0 5px 0;
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

export default CommentItem;
