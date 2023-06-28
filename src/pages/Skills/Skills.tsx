import React from "react";
import certificate from "../../images/Oleksandr Rudnyk.jpg";
import {
  SkillsContainer,
  SkillsSection,
  SkillsList,
  SkillsTitle,
  SkillsListItem,
  SkillsWrapper,
  SkillsLanguage,
  CertificateImg,
} from "./Skills.styled";

export const Skills: React.FC = () => {
  return (
    <SkillsSection>
      <SkillsContainer>
        <SkillsWrapper>
          <SkillsTitle>Tech skills</SkillsTitle>
          <SkillsList>
            <SkillsListItem>JavaScript</SkillsListItem>
            <SkillsListItem>React</SkillsListItem>
            <SkillsListItem>Redux Toolkit</SkillsListItem>
            <SkillsListItem>Styled-components</SkillsListItem>
            <SkillsListItem>NodeJS</SkillsListItem>
            <SkillsListItem>MongoDB Compass</SkillsListItem>
            <SkillsListItem>Postman</SkillsListItem>
            <SkillsListItem>HTML5/ CSS3 / SASS</SkillsListItem>
            <SkillsListItem>Responsive / Adaptive design</SkillsListItem>
            <SkillsListItem>Rest API</SkillsListItem>
            <SkillsListItem>BEM</SkillsListItem>
            <SkillsListItem>Figma</SkillsListItem>
            <SkillsListItem>Git/Git Hub</SkillsListItem>
          </SkillsList>
        </SkillsWrapper>
        <SkillsWrapper>
          <SkillsTitle>Soft skills</SkillsTitle>
          <SkillsList>
            <SkillsListItem>Purposeful</SkillsListItem>
            <SkillsListItem>Diligent</SkillsListItem>
            <SkillsListItem>Self-motivated</SkillsListItem>
            <SkillsListItem>Teamworker</SkillsListItem>
            <SkillsListItem>Analytical mindset</SkillsListItem>
          </SkillsList>
          <SkillsLanguage>Languages</SkillsLanguage>
          <SkillsList>
            <SkillsListItem>English - Upper-Intermediate</SkillsListItem>
            <SkillsListItem>Ukrainian - Native</SkillsListItem>
            <SkillsListItem>Russian - Native</SkillsListItem>
          </SkillsList>
        </SkillsWrapper>
        <SkillsWrapper>
          <SkillsTitle>Certificates</SkillsTitle>
          <ul>
            <li>
              <CertificateImg src={certificate} alt="certificate" />
            </li>
          </ul>
        </SkillsWrapper>
      </SkillsContainer>
    </SkillsSection>
  );
};
