import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../redux/configureStore";
import { actionCreators as commentAction } from "../redux/modules/comment";
import CommentList from "./CommentList";

const CommentWrite = (props) => {
  const dispatch = useDispatch();
  const commentList = useSelector((state) => state.comment.commentList);
  console.log("정보", commentList);
  const url = useSelector((state) => state.router);
  const boardId = url.location.pathname.slice(7);

  useEffect(() => {
    dispatch(commentAction.getCommentAPI(boardId));
  }, []);

  const [content, setContent] = useState("");

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onClickWrite = () => {
    const comment = {
      boardId: boardId,
      content: content,
    };

    if (content === "") {
      window.alert("내용을 입력해주세요.");
    }

    dispatch(commentAction.addCommentAPI(comment));
    setContent("");
  };

  return (
    <>
      <Container>
        <InputBtn>
          <Input
            placeholder="댓글을 입력해주세요."
            onChange={onChangeContent}
            value={content}
          />
          <Button
            onClick={() => {
              onClickWrite();
            }}
          >
            작성
          </Button>
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

export default CommentWrite;
