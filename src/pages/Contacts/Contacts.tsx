import React from "react";
import { ContactForm } from "../../components/ContactForm";
import {
  ContactsSection,
  ContactsContainer,
  ContactsWrapper,
  ContactsList,
  ContactFormWrapper,
  ContactsTitle,
  ContactsListItem,
  SvgLocation,
  SvgMobile,
  SvgEnvelope,
  SvgLinked,
  SvgTelegram,
  SvgGithub,
  ContactsItemLink,
  ContactsListItemText,
} from "./Contacts.styled";

export const Contacts: React.FC = () => {
  return (
    <ContactsSection>
      <ContactsContainer>
        <ContactsWrapper>
          <ContactsTitle>Contact me via socials</ContactsTitle>
          <ContactsList>
            <ContactsListItem>
              <SvgLocation />
              <ContactsListItemText>Kyiv, Ukraine</ContactsListItemText>
            </ContactsListItem>
            <ContactsListItem>
              <SvgMobile />
              <ContactsItemLink href="tel:+380990780982">
                +380990780982
              </ContactsItemLink>
            </ContactsListItem>
            <ContactsListItem>
              <SvgEnvelope />
              <ContactsItemLink href="mailto:alexander.rudnyk@ukr.net">
                alexander.rudnyk@ukr.net
              </ContactsItemLink>
            </ContactsListItem>
            <ContactsListItem>
              <SvgLinked />
              <ContactsItemLink
                href="https://www.linkedin.com/in/alexander-rudnyk-706326172/"
                target="_blank"
                rel="noreferrer"
              >
                @Alexander Rudnyk
              </ContactsItemLink>
            </ContactsListItem>
            <ContactsListItem>
              <SvgTelegram />
              <ContactsItemLink href="https://t.me/Alexander_Rudnyk">
                @Alexander_Rudnyk
              </ContactsItemLink>
            </ContactsListItem>
            <ContactsListItem>
              <SvgGithub />
              <ContactsItemLink
                href="https://github.com/AlexRudnyk?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                AlexRudnyk
              </ContactsItemLink>
            </ContactsListItem>
          </ContactsList>
        </ContactsWrapper>
        <ContactsWrapper>
          <ContactsTitle>... or just using this form</ContactsTitle>
          <ContactFormWrapper>
            <ContactForm />
          </ContactFormWrapper>
        </ContactsWrapper>
      </ContactsContainer>
    </ContactsSection>
  );
};
