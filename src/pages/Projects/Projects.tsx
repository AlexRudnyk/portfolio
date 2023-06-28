import React from "react";
import { ProjectsSection, ProjectsContainer } from "./Projects.styled";
import { ProjectList } from "../../components/ProjectList";

export const Projects: React.FC = () => {
  return (
    <ProjectsSection>
      <ProjectsContainer>
        <ProjectList />
      </ProjectsContainer>
    </ProjectsSection>
  );
};
