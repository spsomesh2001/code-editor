import React from "react";
import { HeaderCon, HeaderText, Logo, LogoDiv } from "./HeaderElements";
import logo from "../../media/web-dev.svg";

const Header = () => {
  return (
    <>
    <HeaderCon>
      <LogoDiv>
        <Logo src={logo} alt="logo"></Logo>
      </LogoDiv>
      <HeaderText>Code IDE</HeaderText>
    </HeaderCon>
    </>
  );
};

export default Header;
