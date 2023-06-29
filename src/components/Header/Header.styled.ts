import styled from "styled-components";

export const HeaderSection = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  background-color: whitesmoke;

  -webkit-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1280px;
  margin-right: auto;
  margin-left: auto;
  padding: 10px 15px;

  @media screen and (min-width: 768px) {
    width: 738px;
  }

  @media screen and (min-width: 1280px) {
    width: 1250px;
  }
`;
