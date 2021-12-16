import styled from "styled-components";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { TwitterShareButton, TwitterIcon } from "react-share";

const ShareBtn = () => {
  const currentUrl = window.location.href;

  return (
    <GridContainer>
      <FacebookShareButton url={currentUrl}>
        <FacebookIcon size={30} round={true} borderRadius={24}></FacebookIcon>
      </FacebookShareButton>
    </GridContainer>
  );
};

export default ShareBtn;

// 버튼별로 40px을 확보하고, 각 영역 간에는 8px의 간격을 둠.
const GridContainer = styled.div`
  grid-template-columns: repeat(4, 48px);
  grid-column-gap: 8px;
  justify-content: center;
  margin-bottom: 16px;
`;
