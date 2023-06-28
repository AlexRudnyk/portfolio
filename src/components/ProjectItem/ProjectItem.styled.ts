import styled from "styled-components";

export const ProjectItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 530px;
  background-color: #ededed;
  padding: 20px;
  border-radius: 20px;
`;

export const ProjectLinkImg = styled.a`
  display: block;
`;

export const ProjectItemImg = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;

export const ProjectItemTitle = styled.h3`
  margin-bottom: 20px;
`;

export const ProjectItemText = styled.p`
  margin-bottom: 20px;
  text-align: justify;
`;

export const ProjectDevText = styled(ProjectItemText)`
  font-style: italic;
`;

export const ProjectLinkBtn = styled.a`
  display: block;
  width: 50px;
  padding: 10px;
  background-color: blue;
  border-radius: 10px;
  text-align: center;
  color: white;

  &:not(:last-child) {
    margin-right: 50px;
  }

  -webkit-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
