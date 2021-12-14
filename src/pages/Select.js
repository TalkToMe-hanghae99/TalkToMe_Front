import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { Chart } from "../components/Chart";
import { actionCreators as SelectCr } from "../redux/modules/select";
export const Select = (props) => {
  const dispatch = useDispatch();
  //디테일페이지 불러오기
  const detail_list = useSelector((state) => state.select.detail_list);
  console.log(props, "쭝");
  const params = useParams();
  const selectId = params.selectId;
  console.log(selectId, "나무");

  console.log(detail_list, "되DDD나");
  console.log(detail_list.selectTitle, "dd");

  const {
    createdAt,
    selectTitle,
    selectDesc,
    option1,
    option2,
    option3,
    option4,
    option5,
  } = detail_list;

  // 시간정리
  const dayTime = detail_list.createdAt;
  const day = new Date(dayTime);
  console.log(day.toLocaleString());
  const dateUpate = day.toLocaleString();
  console.log(dateUpate);
  //선택디테일페이지
  useEffect(() => {
    dispatch(SelectCr.getDetailAPI(selectId));
  }, []);
  return (
    <Container>
      <Flat justify=" space-between">
        <Text size="16px">{selectTitle}</Text>
      </Flat>
      <Flat justify=" space-between">
        <Text>닉네임</Text>
        <Days>{dateUpate}</Days>
      </Flat>
      <Border />
      <TextBox>{selectDesc}</TextBox>
      <Vote>{option1}</Vote>
      <Vote>{option2}</Vote>
      <Vote>{option3}</Vote>
      <Vote>{option4}</Vote>
      <Vote>{option5}</Vote>
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
  background-color: white;
`;

const VoteColor = styled.div`
  width: 70%;
  height: 30px;
  background: crimson;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  background: #e9e9e9;
  border: none;
  font-weight: bold;
  margin: 20px 0;
`;
