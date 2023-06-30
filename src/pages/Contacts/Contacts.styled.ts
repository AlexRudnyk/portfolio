import styled from "styled-components";
import contactsImg from "../../images/web.jpg";
import { ReactComponent as Location } from "../../images/location.svg";
import { ReactComponent as Mobile } from "../../images/mobile.svg";
import { ReactComponent as Envelope } from "../../images/envelope.svg";
import { ReactComponent as Linked } from "../../images/linkedin.svg";
import { ReactComponent as Telegram } from "../../images/telegram.svg";
import { ReactComponent as Github } from "../../images/github.svg";

export const ContactsSection = styled.section`
  width: 100%;
  /* height: 100vh; */
  background-image: url(${contactsImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 1280px) {
    height: 100vh;
  }
`;

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 1280px; */
  margin-right: auto;
  margin-left: auto;
  padding: 20px 15px;

  @media screen and (min-width: 768px) {
    width: 738px;
  }
  @media screen and (min-width: 1280px) {
    width: 1250px;
    flex-direction: row;
    justify-content: center;
    margin-right: 0;
    margin-left: 0;
  }
`;

export const ContactsWrapper = styled.div`
  margin-top: 100px;
  width: calc(100% - 40px);
  max-width: 410px;
  background-color: rgba(237, 237, 237, 0.9);
  padding: 20px;
  border-radius: 20px;

  -webkit-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);

  @media screen and (min-width: 768px) {
    width: 400px;
  }

  @media screen and (min-width: 1280px) {
    height: 400px;

    &:not(:last-child) {
      margin-right: 100px;
    }
  }
`;

export const ContactsList = styled.ul``;

export const ContactFormWrapper = styled.div``;

export const ContactsTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

export const ContactsListItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const SvgLocation = styled(Location)`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;

export const SvgMobile = styled(Mobile)`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;
export const SvgEnvelope = styled(Envelope)`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;
export const SvgLinked = styled(Linked)`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;
export const SvgTelegram = styled(Telegram)`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;
export const SvgGithub = styled(Github)`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;

export const ContactsItemLink = styled.a`
  display: inline-block;
  font-size: 20px;
  color: inherit;

  &:visited {
    color: inherit;
  }

  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover,
  &:focus {
    transform: scale(1.1);
    color: blue;
  }
`;

export const ContactsListItemText = styled.p`
  font-size: 20px;

  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover,
  &:focus {
    transform: scale(1.1);
    color: blue;
  }
`;
