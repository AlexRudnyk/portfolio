import styled from "styled-components";
import projectsImg from "../../images/binary-1536646_1280.jpg";

export const ProjectsSection = styled.section`
  width: 100%;
  background-image: url(${projectsImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ProjectsContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding: 20px 15px;

  @media screen and (min-width: 768px) {
    width: 738px;
  }
  @media screen and (min-width: 1280px) {
    width: 1250px;
  }
`;
