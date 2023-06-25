import React from "react";
import { LogoContainer, LogoLink } from "./Logo.styled";

export const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <LogoLink to="/">AlexRudnyk</LogoLink>
    </LogoContainer>
  );
};
