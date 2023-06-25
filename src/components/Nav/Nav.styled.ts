import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.nav``;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
