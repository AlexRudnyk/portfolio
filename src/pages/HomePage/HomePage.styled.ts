import styled from "styled-components";
import heroImg from "../../images/programmers-and-cyber-security-technologies-design-websites_7997361_929.jpg";

export const HomePageSection = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url(${heroImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HomePageContainer = styled.div`
  width: 1280px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 15px;
`;

export const TitleWrapper = styled.div`
  flex-basis: 30%;
  align-self: center;
`;

export const ImgWrapper = styled.div`
  flex-basis: 70%;
`;

export const HeroImg = styled.img`
  display: block;
  width: 100%;
`;
