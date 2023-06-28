import styled from "styled-components";

export const ProjectItemContainer = styled.div`
  /* width: 300px; */
  background-color: lightgrey;
  padding: 20px;
  border-radius: 20px;
`;

export const ProjectItemImg = styled.img`
  width: 100%;
`;

export const ProjectLinkBtn = styled.a`
  display: block;
  width: 50px;
  padding: 10px;
  background-color: green;
  border-radius: 10px;
  text-align: center;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
