import React from "react";
import {
  ProjectItemContainer,
  ProjectItemImg,
  ProjectLinkBtn,
  BtnWrapper,
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
      <ProjectItemImg src={project.img} alt="wallet" />
      <h3>{project.title}</h3>
      <p>{project.dev}</p>
      <p>{project.role}</p>
      <p>{project.description}</p>
      <p>{project.techs}</p>
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
