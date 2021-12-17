import styled from "styled-components";

import Logo from "../assets/logoVatical.png";

function Header() {
  return (
    <HeaderBox>
      <img src={Logo} />
    </HeaderBox>
  );
}
const HeaderBox = styled.div`
  position: fixed;
  top: 0;
  z-index: 5;
  background-color: #fcc2ce;
  width: 375px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
    height: 70%;
  }
`;
export default Header;
