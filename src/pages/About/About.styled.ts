import styled from "styled-components";
import aboutImg from "../../images/digitization-5140071_1280.jpg";

export const AboutSection = styled.section`
  width: 100%;
  /* height: 100vh; */
  background-image: url(${aboutImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    height: 100vh;
  }
`;

export const AboutContainer = styled.div`
  /* width: 1280px; */
  margin-right: auto;
  margin-left: auto;
  padding: 20px 15px;

  @media screen and (min-width: 768px) {
    width: 738px;
  }
  @media screen and (min-width: 1280px) {
    width: 1250px;
  }
`;

export const AboutList = styled.ul`
  /* display: flex;
  margin-top: 145px;
  gap: 30px; */

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    gap: 30px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    margin-top: 145px;
  }
`;

export const AboutItem = styled.li`
  font-size: 20px;
  line-height: 1.3;
  text-align: justify;
  background-color: rgba(237, 237, 237, 0.9);
  padding: 20px;
  border-radius: 30px;

  -webkit-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);

  @media screen and (min-width: 768px) {
    width: 500px;
    margin-right: auto;
    margin-left: auto;
  }
  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 2 * 30px) / 3);

    -webkit-animation: flip-in-ver-right 0.5s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: flip-in-ver-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    @-webkit-keyframes flip-in-ver-right {
      0% {
        -webkit-transform: rotateY(-80deg);
        transform: rotateY(-80deg);
        opacity: 0;
      }
      100% {
        -webkit-transform: rotateY(0);
        transform: rotateY(0);
        opacity: 1;
      }
    }
    @keyframes flip-in-ver-right {
      0% {
        -webkit-transform: rotateY(-80deg);
        transform: rotateY(-80deg);
        opacity: 0;
      }
      100% {
        -webkit-transform: rotateY(0);
        transform: rotateY(0);
        opacity: 1;
      }
    }
  }
`;

export const AboutItemSecond = styled(AboutItem)`
  animation-delay: 0.6s;
`;

export const AboutItemThird = styled(AboutItem)`
  animation-delay: 1.2s;
`;

export const AboutItemTitle = styled.h3`
  margin-bottom: 10px;
`;

export const Achievements = styled.p`
  margin: 10px 0;
  text-decoration: underline;
`;

export const EducationWrapper = styled.div`
  margin-bottom: 10px;
`;
