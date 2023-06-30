import styled from "styled-components";
import heroImg from "../../images/programmers-and-cyber-security-technologies-design-websites_7997361_9299.jpg";
import { ReactComponent as Arrow } from "../../images/ArrowVector.svg";

export const HomePageSection = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${heroImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HomePageContainer = styled.div`
  position: relative;
  /* width: 1280px; */
  margin-right: auto;
  margin-left: auto;
  padding: 20px 15px;

  @media screen and (max-width: 767.98px) {
    max-width: 450px;
  }

  @media screen and (min-width: 768px) {
    width: 738px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const TitleWrapper = styled.div`
  background-color: white;
  /* width: 364px; */
  border-radius: 10px;
  padding: 8px;
  margin-left: auto;
  margin-right: auto;

  -webkit-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);

  @media screen and (max-width: 767.98px) {
    max-width: 364px;
  }
  @media screen and (min-width: 768px) {
    width: 364px;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const ImgWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 10px;
  max-width: 380px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    width: 380px;
    margin-right: 0;
    margin-left: 0;
  }
`;

export const ImgStyled = styled.img`
  display: block;
  width: 100%;
  /* height: 507px; */
  border-radius: 30px;
`;

export const TitleStyled = styled.h1`
  font-size: 18px;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  animation: typing 3.5s steps(30, end);

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`;

export const TextStyled = styled.h2`
  font-size: 18px;

  -webkit-animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: 4s;

  @-webkit-keyframes slide-right {
    0% {
      -webkit-transform: translateX(-100px);
      transform: translateX(-100px);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  @keyframes slide-right {
    0% {
      -webkit-transform: translateX(-100px);
      transform: translateX(-100px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`;

export const DiscoverWrapper = styled.div`
  position: absolute;
  top: 50px;
  right: 150px;

  @media screen and (min-width: 768px) {
    right: 100px;
  }
  @media screen and (min-width: 1280px) {
    right: 150px;
  }
`;

export const ArrowImg = styled(Arrow)`
  width: 200px;
  height: 200px;

  -webkit-animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  animation-delay: 5s;

  @-webkit-keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }

  @media screen and (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: 1280px) {
    width: 200px;
    height: 200px;
  }
`;

export const DiscoverText = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: white;

  -webkit-animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  animation-delay: 6s;

  @-webkit-keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 32px;
  }
`;
