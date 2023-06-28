import React from "react";
import {
  ProjectItemContainer,
  ProjectItemImg,
  ProjectLinkBtn,
  BtnWrapper,
  ProjectItemTitle,
  ProjectLinkImg,
  ProjectItemText,
  ProjectDevText,
} from "./ProjectItem.styled";

interface IProps {
  project: {
    title: string;
    dev: string;
    role: string;
    img: string;
    techs: string;
    description: string;
    demo: string;
    code: string;
  };
}

export const ProjectItem: React.FC<IProps> = ({ project }) => {
  return (
    <ProjectItemContainer>
      <div>
        <ProjectLinkImg href={project.demo} target="_blank" rel="noreferrer">
          <ProjectItemImg src={project.img} alt="project outlook" />
        </ProjectLinkImg>
        <ProjectItemTitle>{project.title}</ProjectItemTitle>
        <ProjectDevText>{project.dev}</ProjectDevText>
        <ProjectItemText>{project.role}</ProjectItemText>
        <ProjectItemText>{project.description}</ProjectItemText>
        <ProjectItemText>{project.techs}</ProjectItemText>
      </div>
      <BtnWrapper>
        <ProjectLinkBtn href={project.demo} target="_blank" rel="noreferrer">
          Demo
        </ProjectLinkBtn>
        <ProjectLinkBtn href={project.code} target="_blank" rel="noreferrer">
          Code
        </ProjectLinkBtn>
      </BtnWrapper>
    </ProjectItemContainer>
  );
};
