import React, { useState, useEffect }from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { instance } from "../common/api";
import Left from "../assets/left.svg";
import Eye from "../assets/eye.svg";
import Clock from "../assets/clock.svg";
import Share from "../assets/share.svg";
import Edit from "../assets/edit.svg";
import Trash from "../assets/trash.svg";
import Heart from "../assets/heart.svg";
import { history } from "../redux/configureStore";
import { useParams} from "react-router-dom";
import CommentWrite from "../components/CommentWrite";

const WorryDetail = (props) => {
  //댓글 수 
  const commentLength = useSelector(
    (state) => state.comment.commentList.length
  );

const [worryList, setWorryList] = useState("");
const { boardId } = useParams();
const writerId = worryList.userId
const logInId = useSelector((state)=>state.user?.user?.userId)

function worryDelete(){
  //고민 게시글 삭제
  const delWorryList = async () => {
    try {
      const response = await instance.delete(
        `/board/${boardId}`
      );
      window.confirm("게시글을 삭제하시겠습니까?")
      history.push("/worryboard")
      } catch(err) {
      alert("게시글 삭제 실패" ,err)
    }
  };
  delWorryList();

}

useEffect(() => {
  //고민 게시글 가져오기
  const getWorryList = async () => {
    try {
      const response = await instance.get(
        `/board/${boardId}`
      );
      setWorryList(response.data.boardList.[0]);
    } catch(err) {
      console.log("게시글 리스트 불러오기 실패", err);
    }
  };
  getWorryList();
}, []);

  return (
    <Container>
      <Header>
        <img
          src={Left}
          onClick={() => {
            history.goBack();
          }}
        />
        <span>톡톡</span>
      </Header>
      <WriteBox>
        <Title>{worryList?.boardTitle}</Title>
        <Info>
          <div>
            <span>{worryList?.nickname}</span>
            <span>
              <img src={Clock} />
              {worryList?.updatedAt?.slice(0,10)}
            </span>
          </div>

          <span>
            <img src={Eye} />{worryList?.boardViewCount}
          </span>
        </Info>
        <Content>
          {worryList?.boardDesc}
        </Content>
        <EditBox>
          <div>
            <span>댓글 ({commentLength})</span>
          </div>
          { 
          logInId === writerId ? 
          ( <div><img src={Edit} onClick={()=>{history.push(`/worryrevise/${boardId}`)}} />
            <img src={Trash} onClick={worryDelete}/>
            </div>) : ("")
            }
        </EditBox>
      </WriteBox>
      <CommentWrite />
    </Container>
  );
};

const Container = styled.div`
  width: 375px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px;
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  z-index: 5;
  background-color: #f8f9fa;
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

const WriteBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
`;

const Title = styled.h1`
  font-size: 20px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(233, 236, 239);
  color: gray;
  font-size: 12px;
  div {
    display: flex;
    align-items: center;
    span {
      margin-right: 10px;
    }
  }
  span {
    display: flex;
    align-items: center;
  }
  img {
    height: 16px;
    margin-right: 5px;
  }
`;

const Content = styled.div`
  padding: 20px 0;
  font-size: 16px;
  border-bottom: 1px solid rgb(233, 236, 239);
`;

const EditBox = styled.div`
  padding: 20px 0;
  border-bottom: 5px solid rgb(233, 236, 239);
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  color: #64656a;
  div {
    display: flex;
    align-items: center;
    span {
      display: flex;
      align-items: center;
      margin-right: 10px;
      img {
        margin: 0 5px 0 0;
      }
    }
  }
  img {
    height: 16px;
    margin-left: 15px;
    cursor: pointer;
  }
`;

export default WorryDetail;