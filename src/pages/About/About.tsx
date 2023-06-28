import React from "react";
import {
  AboutContainer,
  AboutSection,
  AboutList,
  AboutItem,
  AboutItemSecond,
  AboutItemThird,
  AboutItemTitle,
  Achievements,
  EducationWrapper,
} from "./About.styled";

export const About: React.FC = () => {
  return (
    <AboutSection>
      <AboutContainer>
        <AboutList>
          <AboutItem>
            <AboutItemTitle>About myself</AboutItemTitle>
            <p>
              I am a fullstack developer with 1 year of experience. I have
              gained knowledge of HTML, CSS, GIT, SASS, JavaScript, React,
              Styled-components, Redux Toolkit, Webpack, RestAPI, Node.js,
              MongoDB, as well as priceless experience working both in a team
              and andindividually. Currently I develop my skills in TypeScript.
              My previous work experience helped me to develop strong
              organizational, time-management, and problem-solving skills. I am
              a responsible, eager to learn, highlymotivated, and ready for
              difficult tasks.
            </p>
          </AboutItem>
          <AboutItemSecond>
            <AboutItemTitle>Work experience</AboutItemTitle>
            <p>Sales manager Telko Ukraine LLC,</p>
            <p>March 2011- present</p>
            <p>
              Polymer raw materials B2B sales. ExxonMobil and DuPont performance
              plastics distribution and technical support of customers.
            </p>
            <Achievements>Achievements:</Achievements>
            <p>
              Year to year sales growth. Successful developing of new specialty
              plastic raw materials on the market. Sales expansion outward of
              Ukraine (Moldova, Azerbaijan, Georgia, Armenia)
            </p>
          </AboutItemSecond>
          <AboutItemThird>
            <AboutItemTitle>Education</AboutItemTitle>
            <EducationWrapper>
              <p>- GoIT, 2022 — 2023</p>
              <p>Full-Stack Developer</p>
            </EducationWrapper>
            <EducationWrapper>
              <p>
                - Institute for Master and Post Diploma Studies “KROK”
                University, 2010 — 2012
              </p>
              <p>Degree: Specialist in Foreign Economic Activity Management</p>
            </EducationWrapper>
            <EducationWrapper>
              <p>- National Transport University, 2003 — 2008</p>
              <p>Faculty of Automotive and Mechanical Engineering</p>
              <p>
                Degree: Specialist in Power Engineering with specialization in
                Internal Combustion Engines
              </p>
            </EducationWrapper>
          </AboutItemThird>
        </AboutList>
      </AboutContainer>
    </AboutSection>
  );
};
