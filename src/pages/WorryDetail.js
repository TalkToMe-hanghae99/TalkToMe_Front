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

function worryDelete(){
  const delWorryList = async () => {
    try {
      const response = await instance.delete(
        `http://ozam.shop/board/${boardId}`
      );
      console.log(worryList);
      } catch {
      console.log(worryList);
    }
    console.log(worryList);
  };
  delWorryList();

}

useEffect(() => {
  const getWorryList = async () => {
    try {
      const response = await instance.get(
        `http://ozam.shop/board/${boardId}`
      );
      setWorryList(response.data.postViewList.[0]);
    } catch {
      console.log(worryList);
    }
    console.log(worryList);
  };
  getWorryList();
}, []);

  return (
    <Container>
      <Header>
        <img
          src={Left}
          onClick={() => {
            history.push("/main");
          }}
        />
        <span>톡톡</span>
      </Header>
      <WriteBox>
        <Title>{worryList?.boardTitle}</Title>
        <Info>
          <div>
            <span>{worryList?.userId}</span>
            <span>
              <img src={Clock} />
              {worryList?.updatedAt}
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
            <span>
              <img src={Heart} /> 0
            </span>
            <span>댓글 ({commentLength})</span>
          </div>
          <div>
            <img src={Share} />
            <img src={Edit} />
            <img src={Trash} onClick={worryDelete}/>
          </div>
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
