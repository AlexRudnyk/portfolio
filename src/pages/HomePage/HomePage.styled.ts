import styled from "styled-components";
import heroImg from "../../images/programmers-and-cyber-security-technologies-design-websites_7997361_929.jpg";

export const HomePageSection = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${heroImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 58.4px;
`;

export const HomePageContainer = styled.div`
  width: 1280px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px 15px;
`;

export const TitleWrapper = styled.div`
  background-color: white;
  width: 380px;
  border-radius: 10px;
  padding: 10px;
`;

export const ImgWrapper = styled.div`
  margin-bottom: 10px;
`;

export const ImgStyled = styled.img`
  display: block;
  width: 400px;
  border-radius: 30px;
`;

export const TitleStyled = styled.h1`
  font-size: 22px;
`;

export const TextStyled = styled.h2`
  font-size: 22px;
`;
