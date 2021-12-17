import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import { Chart } from "../components/Chart";
import { Modal } from "../components/Modal";
import ShareBtn from "../components/ShareBtn";
import { actionCreators as SelectCr } from "../redux/modules/select";

import Left from "../assets/left.svg";

export const Select = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  //디테일페이지 불러오기
  const detail_list = useSelector((state) => state.select.detail_list);
  const 민갑연습 = useSelector((state) => state);
  console.log(props, "props");
  console.log(민갑연습, "민갑연습");
  const params = useParams();
  console.log(detail_list, "디테일리스트");
  const selectId = params.selectId;
  const {
    createdAt,
    logInUserId,
    userId,
    selectTitle,
    selectDesc,
    option1,
    option2,
    nickname,
    optionCount,
  } = detail_list;

  const options = useSelector((state) => state.select.vote_list);

  const [like, setlike] = useState(0);
  // 좋아요버튼
  const onIncrease = () => {
    // dispatch(SelectCr.likeSelectAPI(selectId));
    setlike((likes) => likes + 1);
  };

  //투표
  const [option, setOption] = useState(0);

  //투표버튼
  const oneBtn = (e) => {
    setOption(e.target.className.slice(-1));
  };

  // 시간정리
  const dayTime = detail_list.createdAt;
  const day = new Date(dayTime);
  console.log(day.toLocaleString());
  const dateUpate = day.toLocaleString();
  //선택디테일페이지
  useEffect(() => {
    if (option !== 0) {
      dispatch(SelectCr.postVoteAPI(selectId, option));
    }
    setTimeout(() => {
      dispatch(SelectCr.getDetailAPI(selectId));
    }, 0);
  }, [option]);

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
  const updataBtn = () => {
    history.push(`/select/editSelect/${selectId}`);
  };

  return (
<>
    <Header>
        <img
          src={Left}
          onClick={() => {
            history.goBack();
          }}
        />
        <span>A / B</span>
      </Header>
    <Container>
      
      <Flat justify=" space-between">
        <Text size="16px">{selectTitle}</Text>
      </Flat>
      <Flat justify=" space-between">
        <Text>{nickname}</Text>
        <Days>{dateUpate}</Days>
      </Flat>
      <Border />
      <TextBox>{selectDesc}</TextBox>
      <VoteOne className="1" onClick={oneBtn}>
        {option1}
      </VoteOne>
      <VoteTwo className="2" onClick={oneBtn}>
        {option2}
      </VoteTwo>

      <Flat justify="space-evenly">
        <div onClick={onIncrease}>🧡{like}명</div>

        <ShareBtn />
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

      <Chart option1={option1} option2={option2} optionCount={optionCount} />
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
    </>
  );
};

const Container = styled.div`
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  width: 375px;
  background-color:white;
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
  margin: 20px 0;
`;


const Border = styled.div`
  width: 100%;
  border: 1px solid #e7e7e7;
  margin-bottom: 15px;
`;

const TextBox = styled.div``;

const VoteOne = styled.div`
  width: 50%;
  height: 40px;
  border: 1px solid #e7e7e7;
  margin-top: 20px;
  background-color: #f6cb44;
  text-align:center;
  line-height:35px;
  border-radius:5px;
`;

const VoteTwo = styled.div`
  width: 50%;
  height: 40px;
  border: 1px solid #e7e7e7;
  margin-top: 20px;
  background-color: #76bee3;
  text-align:center;
  line-height:35px;
  border-radius:5px;
`;

const VoteColor = styled.div`
  width: 70%;
  height: 30px;
  background: crimson;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  background: #e9e9e9;
  border: none;
  font-weight: bold;
  margin: 20px 0;
  border-radius:5px;
`;
