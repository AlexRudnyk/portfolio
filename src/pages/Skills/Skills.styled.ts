import styled from "styled-components";
import skillsImg from "../../images/digitization-5140074_1280.jpg";

export const SkillsSection = styled.section`
  width: 100%;
  background-image: url(${skillsImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 1280px) {
    height: 100vh;
  }
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
    flex-direction: row;
    width: 1250px;
    gap: 60px;
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

  @media screen and (min-width: 768px) {
    width: 500px;
    margin-left: auto;
    margin-right: auto;

    -webkit-animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    @-webkit-keyframes slide-in-left {
      0% {
        -webkit-transform: translateX(-1000px);
        transform: translateX(-1000px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
      }
    }
    @keyframes slide-in-left {
      0% {
        -webkit-transform: translateX(-1000px);
        transform: translateX(-1000px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
  @media screen and (min-width: 1280px) {
    height: 520px;
    flex-basis: calc((100% - 2 * 60px) / 3);

    -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    @-webkit-keyframes slide-in-top {
      0% {
        -webkit-transform: translateY(-1000px);
        transform: translateY(-1000px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
      }
    }
    @keyframes slide-in-top {
      0% {
        -webkit-transform: translateY(-1000px);
        transform: translateY(-1000px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
      }
    }
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
