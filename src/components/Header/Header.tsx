import React from "react";
import { HeaderContainer, HeaderSection } from "./Header.styled";
import { Logo } from "../Logo";
import { Nav } from "../Nav";

export const Header: React.FC = () => {
  return (
    <HeaderSection>
      <HeaderContainer>
        <Logo />
        <Nav />
      </HeaderContainer>
    </HeaderSection>
  );
};
