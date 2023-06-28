import styled from "styled-components";
import skillsImg from "../../images/digitization-5140074_1280.jpg";

export const SkillsSection = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${skillsImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SkillsContainer = styled.div`
  display: flex;
  gap: 50px;
  width: 1280px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px 15px;
  padding-top: 100px;
`;

export const SkillsWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
  width: 400px;
  padding: 20px;
`;

export const SkillsTitle = styled.h3`
  font-size: 32px;
`;

export const SkillsLanguage = styled(SkillsTitle)`
  margin-top: 80px;
`;

export const SkillsList = styled.ol``;

export const SkillsListItem = styled.li`
  list-style-type: disc;
  font-size: 22px;

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
