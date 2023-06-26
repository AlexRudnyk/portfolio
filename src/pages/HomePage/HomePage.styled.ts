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
  width: 1280px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px 15px;
`;

export const TitleWrapper = styled.div`
  background-color: white;
  width: 360px;
  border-radius: 10px;
  padding: 8px;
`;

export const ImgWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 10px;
`;

export const ImgStyled = styled.img`
  display: block;
  width: 380px;
  border-radius: 30px;
`;

export const TitleStyled = styled.h1`
  font-size: 22px;
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
`;

export const TextStyled = styled.h2`
  font-size: 22px;
  -webkit-animation: flicker-in-1 2s linear both;
  animation: flicker-in-1 2s linear both;
  animation-delay: 3.5s;

  @-webkit-keyframes flicker-in-1 {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0;
    }
    10.1% {
      opacity: 1;
    }
    10.2% {
      opacity: 0;
    }
    20% {
      opacity: 0;
    }
    20.1% {
      opacity: 1;
    }
    20.6% {
      opacity: 0;
    }
    30% {
      opacity: 0;
    }
    30.1% {
      opacity: 1;
    }
    30.5% {
      opacity: 1;
    }
    30.6% {
      opacity: 0;
    }
    45% {
      opacity: 0;
    }
    45.1% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    55% {
      opacity: 1;
    }
    55.1% {
      opacity: 0;
    }
    57% {
      opacity: 0;
    }
    57.1% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    60.1% {
      opacity: 0;
    }
    65% {
      opacity: 0;
    }
    65.1% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    75.1% {
      opacity: 0;
    }
    77% {
      opacity: 0;
    }
    77.1% {
      opacity: 1;
    }
    85% {
      opacity: 1;
    }
    85.1% {
      opacity: 0;
    }
    86% {
      opacity: 0;
    }
    86.1% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes flicker-in-1 {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0;
    }
    10.1% {
      opacity: 1;
    }
    10.2% {
      opacity: 0;
    }
    20% {
      opacity: 0;
    }
    20.1% {
      opacity: 1;
    }
    20.6% {
      opacity: 0;
    }
    30% {
      opacity: 0;
    }
    30.1% {
      opacity: 1;
    }
    30.5% {
      opacity: 1;
    }
    30.6% {
      opacity: 0;
    }
    45% {
      opacity: 0;
    }
    45.1% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    55% {
      opacity: 1;
    }
    55.1% {
      opacity: 0;
    }
    57% {
      opacity: 0;
    }
    57.1% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    60.1% {
      opacity: 0;
    }
    65% {
      opacity: 0;
    }
    65.1% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    75.1% {
      opacity: 0;
    }
    77% {
      opacity: 0;
    }
    77.1% {
      opacity: 1;
    }
    85% {
      opacity: 1;
    }
    85.1% {
      opacity: 0;
    }
    86% {
      opacity: 0;
    }
    86.1% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  /* -webkit-animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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
  } */
`;

export const DiscoverWrapper = styled.div`
  position: absolute;
  top: 50px;
  right: 150px;
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
`;
