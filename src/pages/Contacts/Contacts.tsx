import React from "react";
import { ContactForm } from "../../components/ContactForm";
import {
  ContactsSection,
  ContactsContainer,
  ContactsWrapper,
  ContactsList,
  ContactFormWrapper,
} from "./Contacts.styled";

export const Contacts: React.FC = () => {
  return (
    <ContactsSection>
      <ContactsContainer>
        <ContactsWrapper>
          <ContactsList>
            <li>jhjhjhb</li>
            <li></li>
            <li></li>
          </ContactsList>
        </ContactsWrapper>
        <ContactsWrapper>
          <ContactFormWrapper>
            <ContactForm />
          </ContactFormWrapper>
        </ContactsWrapper>
      </ContactsContainer>
    </ContactsSection>
  );
};
