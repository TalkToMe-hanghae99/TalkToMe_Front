import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const Calendar = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  console.log("calender_props",props)
  console.log("calender_value",props.value)
  console.log("calender_value",endDate)
  return (
    <div>
      <Flex>
        <Title>시작일</Title>
        <DatePicker
          dateFormat="yyyy/MM/dd"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
      </Flex>
      <Flex>
        <Title>종료일</Title>
        <DatePicker
          dateFormat="yyyy/MM/dd"
          selected={endDate}
          onChange={(date) => props.setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </Flex>
    </div>
  );
};

const Title = styled.div`
  font-size: 15px;
  margin-top: 10px;
`;

const Flex = styled.div`
  padding-left:18px;
`;

