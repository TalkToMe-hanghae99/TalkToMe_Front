import React, { useState, useEffect } from "react";

import { instance } from "../common/api";
import MainCardConcern from "../components/MainCardConcern";

const WorryComment = (props) => {
  const [worryList, setWorryList] = useState("");

  useEffect(() => {
    const getWorryList = async () => {
      try {
        const response = await instance.get("/board?sort=commentCount");
        setWorryList(response.data.boardViewList);
      } catch (error) {
        console.log("고민 get 실패", error.response);
      }
    };
    getWorryList();
  }, []);

  return (
    <>
      {worryList &&
        worryList?.map((list) => (
          <MainCardConcern key={list.boardId} List={list} />
        ))}
    </>
  );
};

export default WorryComment;
