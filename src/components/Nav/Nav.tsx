import React from "react";
import { NavContainer, NavigationLink } from "./Nav.styled";
import { NAV_LIST } from "../../constants/navList";

export const Nav: React.FC = () => {
  return (
    <NavContainer>
      {NAV_LIST.map((item) => (
        <NavigationLink key={item.label} to={item.link}>
          {item.label}
        </NavigationLink>
      ))}
    </NavContainer>
  );
};
