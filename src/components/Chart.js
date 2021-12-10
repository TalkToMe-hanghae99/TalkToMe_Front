import React from "react";
import { PieChart } from "react-minimal-pie-chart";

export const Chart = () => {
  const data = [
    { title: "one", value: 30, color: "#f6cb44" },
    { title: "TWO", value: 15, color: "#E3A454" },
    { title: "THREE", value: 20, color: "#76BEE3" },
  ];
  return (
    <PieChart data={data} label={({ dataEntry }) => dataEntry.value} animate />
  );
};
