import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Chart } from "../components/Chart";

export const Select = (props) => {
  //디테일페이지 불러오기
  const detail_list = useSelector((state) => state.Select.detail_list);
  console.log(detail_list, "되나");
  return (
    <Container>
      <Flat justify=" space-between">
        <Text size="16px">점심 고민입니다</Text>
        <Days>날짜</Days>
      </Flat>
      <Flat justify=" space-between">
        <Text>닉네임</Text>
        <Days>시간</Days>
      </Flat>
      <Border />
      <TextBox>
        짜장면 먹으실짜장면 먹으실짜장면 먹으실짜장면 먹으실짜장면 먹으실 짜장면
        먹으실 짜장면 먹으실 짜장면 먹으실 짜장면 먹으실 짜장면 먹으실 짜장면
        먹으실 짜장면 먹으실 짜장면 먹으실 짜장면 먹으실 짜장면 먹으실 짜장면
        먹으실 짜장면 먹으실 짜장면 먹으실 짜장면 먹으실 짜장면 먹으실 짜장면
        먹으실 짜장면 먹으실 짜장면 먹으실
      </TextBox>
      <Vote>
        <VoteColor />
      </Vote>
      <Vote>
        <VoteColor />
      </Vote>
      <Vote>
        <VoteColor />
      </Vote>
      <Flat justify="space-evenly">
        <div>🧡 숫자</div>
        <Text>공유</Text>
        <Text>수정</Text>
        <Text>삭제</Text>
      </Flat>
      <Border />
      <Text>투표결과</Text>
      <Chart />
      <Button>당신의 선택은?</Button>
    </Container>
  );
};

const Text = styled.div`
  font-weight: bold;
  font-size: ${(props) => props.size};
`;

const Days = styled.div`
  color: #858585;
`;

const Flat = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  margin: 10px 0;
`;

const Container = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 375px;
`;

const Border = styled.div`
  width: 100%;
  border: 1px solid #e7e7e7;
  margin-bottom: 30px;
`;

const TextBox = styled.div``;

const Vote = styled.div`
  width: 100%;
  height: 30px;
  border: 1px solid #e7e7e7;
  margin-top: 20px;
`;

const VoteColor = styled.div`
  width: 70%;
  height: 30px;
  background: #ffefe3;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  background: #e9e9e9;
  border: none;
  font-weight: bold;
  margin: 20px 0;
`;
