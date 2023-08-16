import styled from "styled-components";

import {
  customBlack,
  customGrey,
  customOrange,
  customRed,
  customWhite,
  customYellow,
  customLightGrey,
} from "../colors";

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
  padding: 10px;

  @media screen and (max-width: 1366px) {
    box-shadow: none;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const InnerDiv = styled.div`
  width: 90%;
  height: auto;
  margin: 0px auto;

  @media screen and (max-width: 600px) {
    /* margin: 25px; */
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

export const RelativePositionDiv = styled.div`
  position: relative;
  width: 100%;
`;

export const ErrorDiv = styled.div`
  background-color: ${customGrey};
  padding: 10px 10px 30px 10px;
  border: 2px solid ${customBlack};
  border-radius: 5px;
  margin: 0px auto;
  width: 75%;
  height: auto;
  box-shadow: 6px 6px 15px ${customBlack};
  padding: 0px 10px;

  @media screen and (max-width: 1366px) {
    box-shadow: none;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const WarningDiv = styled(ErrorDiv)`
  width: 50%;
  margin: 30px auto 50px auto;
  background-color: ${customOrange};
  box-shadow: 12px 12px 12px ${customBlack};
  padding: 0px 10px;

  @media screen and (max-width: 1366px) {
    width: 70%;
    box-shadow: none;
  }

  @media screen and (max-width: 450px) {
    width: 85%;
  }
`;

export const PaymentErrorDiv = styled(WarningDiv)`
  background-color: ${customRed};
`;

export const CardInputDiv = styled.div`
  background-color: ${customLightGrey};
  height: 60px;
  width: 50%;
  margin: 30px auto 40px auto;
  padding: 20px 20px 30px 20px;
  border-radius: 5px;
  border: 2px solid ${customBlack};

  @media screen and (max-width: 1366px) {
    width: 80%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const StripeLogoDiv = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "showPrePayButton",
})`
  margin: ${(props) =>
    props.showPrePayButton ? "200px auto 0px auto" : "50px auto 0px auto"};
  width: 100%;
`;

export const TopMarginDiv = styled.div`
  width: 100%;
  height: auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SocialLoginsDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 30px auto;

  @media screen and (max-width: 280px) {
    flex-direction: column;
  }
`;

export const Accordion = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "shouldShowElement",
})`
  width: ${({ shouldShowElement }) => (shouldShowElement ? "70%" : "30%")};
  margin: 2rem auto;
  border: 2px solid ${customBlack};
  border-radius: 5px;

  &.funds-help {
    margin: 20px auto 10px auto;
  }

  @media screen and (max-width: 1366px) {
    width: ${({ shouldShowElement }) => (shouldShowElement ? "90%" : "50%")};
  }

  @media screen and (max-width: 450px) {
    width: ${({ shouldShowElement }) => (shouldShowElement ? "90%" : "70%")};
  }
`;

export const AccordionTitle = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "shouldShowElement",
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  background-color: ${({ shouldShowElement }) =>
    shouldShowElement ? customYellow : customGrey};
  padding: 0.5rem;
  border-bottom: ${({ shouldShowElement }) =>
    shouldShowElement ? `2px solid ${customBlack}` : "none"};
  border-radius: ${({ shouldShowElement }) =>
    shouldShowElement ? "5px 5px 0px 0px" : "5px 5px 5px 5px"};

  @media screen and (max-width: 450px) {
    font-size: 14px;
  }
`;

// SecondAccordion is for if there are 2 accordions on a page as they have separate states.
export const SecondAccordion = styled(Accordion).withConfig({
  shouldForwardProp: (prop) => prop !== "shouldShowSecondElement",
})`
  &.book-session {
    margin: 20px auto;
  }

  width: ${({ shouldShowSecondElement }) =>
    shouldShowSecondElement ? "70%" : "30%"};

  @media screen and (max-width: 1366px) {
    width: ${({ shouldShowSecondElement }) =>
      shouldShowSecondElement ? "90%" : "50%"};
  }

  @media screen and (max-width: 450px) {
    width: ${({ shouldShowSecondElement }) =>
      shouldShowSecondElement ? "90%" : "70%"};
  }
`;

// SecondAccordion is for if there are 2 accordions on a page as they have separate states.
export const SecondAccordionTitle = styled(AccordionTitle).withConfig({
  shouldForwardProp: (prop) => prop !== "shouldShowSecondElement",
})`
  background-color: ${({ shouldShowSecondElement }) =>
    shouldShowSecondElement ? customYellow : customGrey};
  border-bottom: ${({ shouldShowSecondElement }) =>
    shouldShowSecondElement ? `2px solid ${customBlack}` : "none"};
  border-radius: ${({ shouldShowSecondElement }) =>
    shouldShowSecondElement ? "5px 5px 0px 0px" : "5px 5px 5px 5px"};
`;

export const AccordionContent = styled.div`
  padding: 1rem;
  background-color: ${customGrey};
  border-radius: 0px 0px 15px 15px;
`;

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;

  &.button {
    margin: 20px auto;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
