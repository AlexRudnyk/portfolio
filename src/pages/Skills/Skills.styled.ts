import styled from "styled-components";
import skillsImg from "../../images/digitization-5140074_1280.jpg";

export const SkillsSection = styled.section`
  width: 100%;
  background-image: url(${skillsImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px 15px;
  padding-top: 100px;

  @media screen and (min-width: 768px) {
    width: 738px;
  }
  @media screen and (min-width: 1280px) {
    width: 1250px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }
`;

export const SkillsWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
  width: calc(100% - 40px);
  max-width: 410px;
  padding: 20px;

  -webkit-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);

  @media screen and (min-width: 768px) and (max-width: 1279.98px) {
    width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 1280px) {
    height: 520px;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const SkillsWrapperTwo = styled(SkillsWrapper)`
  animation-delay: 0.5s;
`;

export const SkillsWrapperThree = styled(SkillsWrapper)`
  animation-delay: 1s;
`;

export const SkillsTitle = styled.h3`
  font-size: 32px;
`;

export const SkillsLanguage = styled(SkillsTitle)`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    margin-top: 80px;
  }
`;

export const SkillsList = styled.ol``;

export const SkillsListItem = styled.li`
  list-style-type: disc;
  font-size: 18px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover,
  &:focus {
    transform: scale(1.1);
    color: blue;
  }
`;

export const CertificateImg = styled.img`
  display: block;
  width: 100%;
`;
