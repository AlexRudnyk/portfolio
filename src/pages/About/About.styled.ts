import styled from "styled-components";
import aboutImg from "../../images/digitization-5140071_1280.jpg";

export const AboutSection = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${aboutImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const AboutContainer = styled.div`
  width: 1280px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px 15px;
`;

export const AboutList = styled.ul`
  display: flex;
`;

export const AboutItem = styled.li`
  font-size: 20px;
  line-height: 1.3;
  margin-top: 145px;
  text-align: justify;
  flex-basis: 33.333%;
  background-color: rgba(237, 237, 237, 0.9);
  padding: 20px;
  border-radius: 30px;

  &:not(:last-child) {
    margin-right: 20px;
  }

  -webkit-animation: roll-in-left 0.6s ease-out both;
  animation: roll-in-left 0.6s ease-out both;

  @-webkit-keyframes roll-in-left {
    0% {
      -webkit-transform: translateX(-800px) rotate(-540deg);
      transform: translateX(-800px) rotate(-540deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0) rotate(0deg);
      transform: translateX(0) rotate(0deg);
      opacity: 1;
    }
  }
  @keyframes roll-in-left {
    0% {
      -webkit-transform: translateX(-800px) rotate(-540deg);
      transform: translateX(-800px) rotate(-540deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0) rotate(0deg);
      transform: translateX(0) rotate(0deg);
      opacity: 1;
    }
  }

  -webkit-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
`;

export const AboutItemSecond = styled(AboutItem)`
  animation-delay: 0.6s;
`;

export const AboutItemThird = styled(AboutItem)`
  animation-delay: 1.2s;
`;

export const AboutItemTitle = styled.h3`
  margin-bottom: 10px;
`;

export const Achievements = styled.p`
  margin: 10px 0;
  text-decoration: underline;
`;

export const EducationWrapper = styled.div`
  margin-bottom: 10px;
`;
