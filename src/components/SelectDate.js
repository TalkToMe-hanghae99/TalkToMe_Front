import React, { useState, useEffect } from "react";

import MainCardSelect from "../components/MainCardSelect";
import { instance } from "../common/api";

const SelectDate = (props) => {
  const [selectList, setSelectList] = useState("");

  useEffect(() => {
    const getSelectDateList = async () => {
      try {
        const response = await instance.get("/select?sort=date");
        setSelectList(response.data.selectsList);
      } catch (error) {
        console.log("선택지 get 오류", error.response);
      }
    };
    getSelectDateList();
  }, []);

  return (
    <>
      {selectList &&
        selectList?.map((list) => (
          <MainCardSelect key={list.selectId} List={list} />
        ))}
    </>
  );
};

export default SelectDate;
