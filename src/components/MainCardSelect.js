import styled from "styled-components";
import { history } from "../redux/configureStore";

import eye from "../assets/eye.svg";
import clock from "../assets/clock.svg";

function MainCardSelect(props) {
  return (
    <CardBox
      onClick={() => {
        console.log("선택지카드");
        history.push(`/select/${props.List?.selectId}`);
      }}
    >
      <Top>
        <span>
          <img src={clock} />
          {props.List?.createdAt.slice(0, 10)}
        </span>
        <span>
          <img src={eye} />
          {props.List?.selectViewCount}
        </span>
      </Top>
      <Bottom>
        <Title>{props.List?.selectTitle}</Title>
        <Noti>
          <p>{props.List?.participationCount}</p>
          <span>투표수</span>
        </Noti>
      </Bottom>
    </CardBox>
  );
}
// const CardBox = styled.div`
//   width: 335px;
//   height: 130px;
//   background-color: white;
//   display: flex;
//   flex-flow: column wrap;
//   margin: 0px auto;
//   margin-bottom: 20px;
//   border: 1px solid #e9e9e9;
//   border-radius: 5px;

//   :hover {
//     cursor: pointer;
//     background-color: #ffefe3;
//   }
// `;

// const Title = styled.div`
//   width: 290px;
//   font-size: 15px;
//   height: 20px;
//   margin: 11px 20px;
// `;
// const Text = styled.div`
//   width: 110px;
//   font-size: 15px;
//   height: 20px;
//   margin: 11px 20px;
// `;

const CardBox = styled.div`
  width: 335px;
  height: 110px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  margin: 0px auto;
  margin-bottom: 20px;
  border: 1px solid #e9e9e9;
  border-radius: 5px;

  :hover {
    cursor: pointer;
    background-color: #ffefe3;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  span {
    display: flex;
    color: gray;

    img {
      width: 16px;
      margin-right: 5px;
    }
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 18px;
  margin: 0;
`;

const Noti = styled.div`
  width: 50px;
  height: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  border-radius: 10px;

  p {
    font-weight: bold;
    margin: 0;
  }

  span {
    font-size: 12px;
  }
`;

export default MainCardSelect;
