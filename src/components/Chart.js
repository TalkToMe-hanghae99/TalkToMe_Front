import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useSelector } from "react-redux";

export const Chart = (props) => {
  const detail_list = useSelector((state) => state.select.detail_list);
  console.log(detail_list.option1, "헐");
  const { option1, option2, optionCount } = detail_list;
  const data = [
    { title: "{option1}", value: 3, color: "#f6cb44" },
    { title: "{option2}", value: 15, color: "#76BEE3" },
  ];
  return (
    <PieChart
      data={data}
      label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
      animate
    />
  );
};
