import styled from "styled-components";
import contactsImg from "../../images/web.jpg";

export const ContactsSection = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${contactsImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ContactsContainer = styled.div`
  display: flex;
  width: 1280px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px 15px;
`;

export const ContactsWrapper = styled.div`
  margin-top: 100px;
  width: 400px;
  background-color: rgba(237, 237, 237, 0.9);
  padding: 20px;
  border-radius: 20px;

  &:not(:last-child) {
    margin-right: 100px;
  }
`;

export const ContactsList = styled.ul``;

export const ContactFormWrapper = styled.div``;
