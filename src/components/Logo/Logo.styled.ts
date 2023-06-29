import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoContainer = styled.div``;

export const LogoLink = styled(Link)`
  font-family: "Dancing Script", cursive;
  font-size: 30px;
  margin-left: 20px;

  &:visited {
    color: black;
  }
`;
