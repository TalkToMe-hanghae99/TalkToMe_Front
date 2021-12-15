import React from "react";
import { useSelector } from "react-redux";
import CommentItem from "./CommentItem";

const CommentList = () => {
  const commentList = useSelector((state) => state.comment.commentList);

  return (
    <>
      {commentList && (
        <React.Fragment>
          {commentList.map((item, index) => {
            return <CommentItem {...item} index={index} key={index} />;
          })}
        </React.Fragment>
      )}
    </>
  );
};

export default CommentList;
