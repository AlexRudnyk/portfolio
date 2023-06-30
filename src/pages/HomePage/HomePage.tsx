import React from "react";
import {
  HomePageContainer,
  HomePageSection,
  TitleWrapper,
  ImgWrapper,
  ImgStyled,
  TitleStyled,
  TextStyled,
  ArrowImg,
  DiscoverWrapper,
  DiscoverText,
} from "./HomePage.styled";
import myPhoto from "../../images/photo_2023-06-26_08-56-00.jpg";
import Media from "react-media";

export const HomePage: React.FC = () => {
  return (
    <>
      <Media
        queries={{
          small: "(max-width: 767.98px)",
          medium: "(min-width: 768px)",
        }}
      >
        {(matches) => (
          <>
            {matches.small && (
              <>
                <HomePageSection>
                  <HomePageContainer>
                    {/* <DiscoverWrapper>
                      <ArrowImg />
                      <DiscoverText>Discover more...</DiscoverText>
                    </DiscoverWrapper> */}
                    <ImgWrapper>
                      <ImgStyled src={myPhoto} alt="developer" />
                    </ImgWrapper>
                    <TitleWrapper>
                      <TitleStyled>
                        Hi! My name is Alexander Rudnyk,
                      </TitleStyled>
                      <TextStyled>and I'm a JS fullstack developer</TextStyled>
                    </TitleWrapper>
                  </HomePageContainer>
                </HomePageSection>
              </>
            )}
            {matches.medium && (
              <>
                <HomePageSection>
                  <HomePageContainer>
                    <DiscoverWrapper>
                      <ArrowImg />
                      <DiscoverText>Discover more...</DiscoverText>
                    </DiscoverWrapper>
                    <ImgWrapper>
                      <ImgStyled src={myPhoto} alt="developer" />
                    </ImgWrapper>
                    <TitleWrapper>
                      <TitleStyled>
                        Hi! My name is Alexander Rudnyk,
                      </TitleStyled>
                      <TextStyled>and I'm a JS fullstack developer</TextStyled>
                    </TitleWrapper>
                  </HomePageContainer>
                </HomePageSection>
              </>
            )}
          </>
        )}
      </Media>
    </>
  );
};
