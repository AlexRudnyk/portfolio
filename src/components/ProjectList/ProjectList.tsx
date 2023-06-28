import React from "react";
import { projectsList } from "../../constants/projectsList";
import { ProjectContainer, ProjectListItem } from "./ProjectList.styled";
import { ProjectItem } from "../ProjectItem";

export const ProjectList: React.FC = () => {
  return (
    <ProjectContainer>
      {projectsList.map((project) => (
        <ProjectListItem key={project.title}>
          <ProjectItem project={project} />
        </ProjectListItem>
      ))}
    </ProjectContainer>
  );
};
