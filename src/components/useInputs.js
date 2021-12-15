import React, { useState } from "react";

export const useInputs = (initialValue) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const inChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  return [inputValue, onchange];
};
