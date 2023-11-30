import React from "react";
import certificate from "../../images/Oleksandr Rudnyk.jpg";
import udemyCertificate from "../../images/Udemy.jpg";
import {
  SkillsContainer,
  SkillsSection,
  SkillsList,
  SkillsTitle,
  SkillsListItem,
  SkillsWrapper,
  SkillsWrapperTwo,
  SkillsWrapperThree,
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
            <SkillsListItem>TypeScript</SkillsListItem>
            <SkillsListItem>React</SkillsListItem>
            <SkillsListItem>Next.js</SkillsListItem>
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
        <SkillsWrapperTwo>
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
        </SkillsWrapperTwo>
        <SkillsWrapperThree>
          <ul>
            <li>
              <CertificateImg src={certificate} alt="certificate" />
            </li>
          </ul>
        </SkillsWrapperThree>
        <SkillsWrapperThree>
          <ul>
            <li>
              <CertificateImg src={udemyCertificate} alt="certificate" />
            </li>
          </ul>
        </SkillsWrapperThree>
      </SkillsContainer>
    </SkillsSection>
  );
};
