import { useState } from "react";
import {
  HeaderContainer,
  HeaderSection,
  BurgerMenu,
  BurgerImg,
  Modal,
  ModalCloseBtn,
  ModalList,
  ModalListItem,
  ModalLink,
} from "./Header.styled";
import { Logo } from "../Logo";
import { Nav } from "../Nav";
import Media from "react-media";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleModalToggle = () => {
    setOpen(!open);
  };

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
                    <BurgerMenu onClick={handleModalToggle}>
                      <BurgerImg />
                    </BurgerMenu>
                  </HeaderContainer>
                </HeaderSection>
                {open && (
                  <Modal>
                    <ModalCloseBtn type="button" onClick={handleModalToggle}>
                      X
                    </ModalCloseBtn>
                    <ModalList>
                      <ModalListItem>
                        <ModalLink to="/home">Home</ModalLink>
                      </ModalListItem>
                      <ModalListItem>
                        <ModalLink to="/about">About</ModalLink>
                      </ModalListItem>
                      <ModalListItem>
                        <ModalLink to="/projects">Projects</ModalLink>
                      </ModalListItem>
                      <ModalListItem>
                        <ModalLink to="/skills">Skills</ModalLink>
                      </ModalListItem>
                      <ModalListItem>
                        <ModalLink to="/contacts">Contacts</ModalLink>
                      </ModalListItem>
                    </ModalList>
                  </Modal>
                )}
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
