import styled from "styled-components";

interface IProps {
  delay: number;
}

export const ProjectContainer = styled.ul`
  padding-top: 100px;
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
`;

export const ProjectListItem = styled.li<IProps>`
  flex-basis: calc((100% - 2 * 50px) / 3);

  -webkit-animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: ${(props) => props.delay}s;

  @-webkit-keyframes scale-in-center {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes scale-in-center {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }
`;
