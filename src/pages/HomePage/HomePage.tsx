import React from "react";
import {
  HomePageContainer,
  HomePageSection,
  TitleWrapper,
  ImgWrapper,
  ImgStyled,
  TitleStyled,
  TextStyled,
} from "./HomePage.styled";
import myPhoto from "../../images/photo_2023-06-26_08-56-00.jpg";

export const HomePage: React.FC = () => {
  return (
    <HomePageSection>
      <HomePageContainer>
        <ImgWrapper>
          <ImgStyled src={myPhoto} alt="developer" />
        </ImgWrapper>
        <TitleWrapper>
          <TitleStyled>Hi! My name is Alexander Rudnyk,</TitleStyled>
          <TextStyled>and I'm a JS fullstack developer</TextStyled>
        </TitleWrapper>
      </HomePageContainer>
    </HomePageSection>
  );
};
