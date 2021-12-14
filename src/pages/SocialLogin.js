import React from "react";

const SocialLogin = (props) => {
  const url = props.match.params;

  console.log("콘솔찍기", url);

  return (
    <div>
      <h1>구글로그인 연습</h1>
    </div>
  );
};

export default SocialLogin;
