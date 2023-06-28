import styled from "styled-components";

import { customBlack, customBlue, customWhite, customYellow } from "../colors";

// Navigation
export const Nav = styled.div`
  background-color: ${customYellow};
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid ${customBlack};
`;

export const LogoContainer = styled.div`
  width: 80px;
  height: 80px;
  cursor: pointer;
`;

export const HamburgerContainer = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media screen and (max-width: 1366px) {
    display: flex;
    align-items: center;
  }
`;

export const Menu = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "showHamburgerMenu",
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding-bottom: ${(props) => (props.showHamburgerMenu ? "50px" : "0px")};
  border-top: ${(props) =>
    props.showHamburgerMenu ? `2px solid ${customBlack}` : "none"};
  border-bottom: ${(props) =>
    props.showHamburgerMenu ? `2px solid ${customBlack}` : "none"};

  @media screen and (max-width: 1366px) {
    padding-top: ${(props) => (props.showHamburgerMenu ? "20px" : "0px")};
    flex-direction: column;
    width: 100%;
    max-height: ${(props) => (props.showHamburgerMenu ? "700px" : "0px")};
    transition: ${(props) =>
      props.showHamburgerMenu ? "max-height 1s linear" : "none"};
    overflow: scroll;
    background-color: ${customYellow};
  }
`;

export const LoaderDiv = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 30;
  background-color: ${customBlack};
  opacity: 0.8;
`;

// Main Divs
export const ParentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${customWhite};
  margin: 50px auto;
  width: 75%;
  height: auto;
  border-radius: 5px;
  border: 1px solid black;
  box-shadow: 6px 6px 15px ${customBlack};
  padding: 0px 10px;

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const InnerDiv = styled.div`
  width: 80%;
  height: auto;
  background-color: ${customBlue};
  margin: 50px auto;
  border-radius: 5px;
  border: 1px solid black;

  &.clear-bg {
    background-color: ${customWhite};
    border: none;
    margin: 0px auto;
    border-radius: unset;

    h1 {
      color: ${customBlack};
      text-shadow: none;
    }
  }

  @media screen and (max-width: 600px) {
    margin: 25px;
  }

  @media screen and (max-width: 375px) {
    padding: 10px;
  }
`;

export const ImageDiv = styled.div`
  width: 30%;
  height: 30%;
  margin: 0px auto 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0px;

  &.no-padding {
    padding: 0px;
  }

  @media screen and (max-width: 600px) {
    height: 90%;
    width: 90%;
  }
`;
