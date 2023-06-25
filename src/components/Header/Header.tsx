import React from "react";
import { HeaderContainer } from "./Header.styled";
import { Logo } from "../Logo";
import { Nav } from "../Nav";

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Nav />
    </HeaderContainer>
  );
};
