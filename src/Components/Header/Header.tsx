import React from "react";
import {
  Content,
  DivLogo,
  ImgLogo,
  Logo,
} from "../../Components/Header/Header.styles";
import { FaQuestion } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <Content>
      <DivLogo>
        <ImgLogo>
          <FaQuestion className="icon" />
        </ImgLogo>
        <Logo>
          <span>Quiz Show</span>
        </Logo>
      </DivLogo>
    </Content>
  );
};

export default Header;
