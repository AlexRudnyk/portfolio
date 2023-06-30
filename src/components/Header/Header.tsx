import React from "react";
import {
  HeaderContainer,
  HeaderSection,
  BurgerMenu,
  BurgerImg,
} from "./Header.styled";
import { Logo } from "../Logo";
import { Nav } from "../Nav";
import Media from "react-media";

export const Header: React.FC = () => {
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
                <HeaderSection>
                  <HeaderContainer>
                    <Logo />
                    <BurgerMenu onClick={() => console.log("Clicked!")}>
                      <BurgerImg />
                    </BurgerMenu>
                  </HeaderContainer>
                </HeaderSection>
              </>
            )}
            {matches.medium && (
              <>
                <HeaderSection>
                  <HeaderContainer>
                    <Logo />
                    <Nav />
                  </HeaderContainer>
                </HeaderSection>
              </>
            )}
          </>
        )}
      </Media>
    </>
  );
};
