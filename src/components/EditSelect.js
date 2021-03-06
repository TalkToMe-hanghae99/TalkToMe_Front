import React, { useState } from "react";
import styled from "styled-components";
import Left from "../assets/left.svg";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as SelectCr } from "../redux/modules/select";

export const EditSelect = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  //selectid
  const selectId = props.match.params.selectId;

  //디테일페이지 db
  const detail_list = useSelector((state) => state.select.detail_list);
  console.log(detail_list.selectDesc, "아놔");
  //기존 인풋값
  const [inputValue, setInputValue] = useState({
    selectTitle: detail_list?.selectTitle,
    selectDesc: detail_list?.selectDesc,
    option1: detail_list?.option1,
    option2: detail_list?.option2,
  });

  const { selectTitle, selectDesc, option1, option2 } = inputValue;

  //인풋값 추적
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  //입력버튼
  const submitBtn = (e) => {
    //편집내용
    const selectEditInfo = {
      selectTitle: inputValue.selectTitle,
      selectDesc: inputValue.selectDesc,
      option1: inputValue.option1,
      option2: inputValue.option2,
    };
    //업데이트 dispatch
    dispatch(SelectCr.UpdateSelectAPI(selectId, selectEditInfo));
    e.target.disabled = true;
  };
  return (
    <div>
      <Header>
        <img
          src={Left}
          onClick={() => {
            history.push("/main");
          }}
          alt="뒤로"
        />
        <span>선택 작성하기</span>
      </Header>
      <Container>
        <Input
          onChange={onChange}
          value={selectTitle}
          placeholder="투표 제목을 입력하세요."
          name="selectTitle"
        ></Input>

        <Border />
        <Textarea
          onChange={onChange}
          value={selectDesc}
          placeholder="고민을 적어보세요."
          name="selectDesc"
        />
        <Lavel>A 선택지</Lavel>
        <Select01
          placeholder="선택지를 적어보세요."
          value={option1}
          onChange={onChange}
          name="option1"
        />
        <Lavel>B 선택지</Lavel>
        <Select02
          placeholder="선택지를 적어보세요."
          value={option2}
          onChange={onChange}
          name="option2"
        />

        <Flat justify="space-between">
          <Button onClick={submitBtn}>작성 완료</Button>
          <Button
            onClick={() => {
              history.replace(`/select/${selectId}`);
            }}
          >
            취소
          </Button>
        </Flat>
      </Container>
    </div>
  );
};

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 100vh;
  background-color: white;
  padding: 30px;
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  z-index: 5;
  background-color: #9ddbf6;
  width: 375px;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 10px 20px;

  img {
    height: 60%;
    cursor: pointer;
  }

  span {
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
  }
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  margin: 70px auto;
  margin-bottom: 00px;
  border: #e7e7e7;
  font-size: 16px;
  font-weight: bold;
  background-color: #fafafa;
`;

const Border = styled.div`
  width: 100%;
  border: 1px solid #e7e7e7;
  margin: 40px 0;
  background-color: red;
`;
const Textarea = styled.textarea`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 10px;
  height: 300px;
  font-size: 15px;
  border: #e7e7e7;
  background-color: #fafafa;
`;
const Flat = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  margin: 10px 0;
`;

const Lavel = styled.div`
  height: 25px;
  width: 100px;
  margin: 15px 15px 15px 0px;
`;

const Select01 = styled.input`
  height: 35px;
  width: 100%;
  border: 1px solid #e1e1e1;
  margin-bottom: 12px;
`;
const Select02 = styled.input`
  height: 35px;
  width: 100%;
  border: 1px solid #e1e1e1;
  margin-bottom: 12px;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  background: #e9e9e9;
  border: none;
  font-weight: bold;
  margin: 20px 20px;
  background-color: pink;
  color: white;
  font-weight: bold;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
`;
