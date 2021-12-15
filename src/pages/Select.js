import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { Chart } from "../components/Chart";
import { Modal } from "../components/Modal";
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
  console.log(detail_list.userId, "dd");
  console.log(detail_list.logInUserId, "치킨");
  const {
    createdAt,
    logInUserId,
    userId,
    selectTitle,
    selectDesc,
    option1,
    option2,
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

  //모달 여부
  const [showModal, setShowModal] = useState(false);

  //모달 내용
  const modalData = {
    title: "고민 게시글",
    descriptionOne: "선택하신 게시글을 삭제 하시겠습니까?",
    descriptionTwo: " 게시글을 수정하시겠습니까?",
    btnClose: "취소",
    btnUpdate: "삭제",
    btnConfirm: "수정",
  };

  // 삭제버튼
  const deleteBtn = () => {
    dispatch(SelectCr.deleteSelectAPI(selectId));
    setShowModal(false);
  };
  // 수정 버튼
  const updataBtn = () => {};
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

      <Flat justify="space-evenly">
        <div>🧡 숫자</div>
        <Text>공유</Text>
        {/* 쓴사람에게만 보이는 수정버튼 */}
        {userId === logInUserId ? (
          <Text
            onClick={() => {
              setShowModal(true);
            }}
          >
            수정
          </Text>
        ) : (
          ""
        )}
        {/* 쓴사람에게만 보이는 삭제버튼 */}
        {userId === logInUserId ? (
          <Text
            onClick={() => {
              setShowModal(true);
            }}
          >
            삭제
          </Text>
        ) : (
          ""
        )}
      </Flat>
      <Border />
      <Text>투표결과</Text>
      <Chart />
      <Button>당신의 선택은?</Button>
      {/*  모달 */}
      {showModal && (
        <Modal
          three
          setShowModal={setShowModal}
          modalData={modalData}
          deleteBtn={deleteBtn}
          updataBtn={updataBtn}
        ></Modal>
      )}
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
