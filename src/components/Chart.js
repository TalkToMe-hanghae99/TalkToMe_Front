import React, { useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useSelector } from "react-redux";

export const Chart = (props) => {
  const { option1, option2, optionCount } = props;

  const options = useSelector((state) => state.select.vote_list);

  let cnt = 0;

  if (optionCount) {
    cnt = optionCount[0];
  }

  console.log(cnt[2]);
  const data = [
    {
      title: option1,
      value: cnt[1] ? cnt[1] : 0,
      color: "#f6cb44",
    },
    {
      title: option2,
      value: cnt[2] ? cnt[2] : 0,
      color: "#76BEE3",
    },
  ];

  console.log("차트데이터", data);
  console.log("차트프롭스", props);
  return (
    <PieChart
      data={data}
      label={({ dataEntry }) =>
        dataEntry.value !== 0 ? `${Math.round(dataEntry.percentage)}%` : null
      }
    />
  );
};
