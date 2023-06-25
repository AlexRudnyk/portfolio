import React from "react";
import { HomePageContainer, HomePageSection } from "./HomePage.styled";

export const HomePage: React.FC = () => {
  return (
    <HomePageSection>
      <HomePageContainer>
        <h1>Hi! My name is Alexander,</h1>
        <h2>and I'm a JS fullstack developer</h2>
      </HomePageContainer>
    </HomePageSection>
  );
};
