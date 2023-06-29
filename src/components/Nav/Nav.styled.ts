import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.nav``;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  &:not(:last-child) {
    margin-right: 20px;
  }

  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover,
  &:focus {
    color: blue;
  }
`;
