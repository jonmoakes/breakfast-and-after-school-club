import styled, { keyframes } from "styled-components";
import { pulse, zoomInLeft, zoomInRight } from "react-animations";

import {
  customBlack,
  customBlue,
  customGrey,
  customLightGreen,
  customOrange,
  customRed,
  customWhite,
  customYellow,
} from "../colors";

const PulseAnimation = keyframes`${pulse}`;
const zoomInLeftAnimation = keyframes`${zoomInLeft}`;
const zoomInRightAnimation = keyframes`${zoomInRight}`;

export const Button = styled.button`
  width: 250px;
  height: 50px;
  font-size: 18px;
  font-family: inherit;
  font-weight: bold;
  text-transform: capitalize;
  color: ${customBlack};
  background-color: ${customYellow};
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid ${customBlack};
  transition: all 0.2s ease-in-out;
  outline: none;
  margin: 20px auto;

  &:hover {
    transform: scale(1.05);
    color: ${customWhite};
    background-color: ${customBlue};

    @media screen and (max-width: 1366px) {
      transition: none;

      &:hover {
        color: ${customBlack};
        background-color: ${customYellow};
      }
    }
  }

  :active {
    transform: translate(0, 0.5rem);
    box-shadow: 0 0.1rem ${customBlack};
  }

  @media screen and (max-width: 320px) {
    width: 200px;
  }
`;

export const DisabledButton = styled(Button)`
  box-shadow: none;
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
`;

export const YellowGreenButton = styled(Button)`
  &.add-funds {
    margin: 0px auto 40px auto;
    width: 180px;
  }

  &.disabled {
    margin: 0px auto 40px auto;
    box-shadow: none;
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
  }

  &:hover {
    background-color: ${customLightGreen};
    color: ${customBlack};
    text-shadow: none;

    @media screen and (max-width: 1366px) {
      background-color: unset;
      color: unset;
    }
  }
`;

export const AddButton = styled.button`
  width: 70px;
  height: 70px;
  position: fixed;
  right: 30px;
  top: 110px;
  background-color: transparent;
  border: none;
  z-index: 10;
  outline: none;
  cursor: pointer;
  animation: infinite 1s ${PulseAnimation};

  @media screen and (max-width: 850px) {
    right: 20px;
  }

  @media screen and (max-width: 600px) {
    right: -10px;
  }

  @media screen and (max-width: 450px) {
    right: 5px;
    top: 100px;
  }
`;

export const EditEntryButton = styled(Button)`
  background-color: ${customYellow};
  animation: 1s ${zoomInLeftAnimation};
  width: 200px;
  height: 50px;
  font-size: 18px;
  line-height: 10px;
  margin: 10px;
  color: ${customBlack};
  text-shadow: none;

  &:hover {
    background-color: ${customYellow};
    color: ${customBlack};
  }

  @media screen and (max-width: 850px) {
    font-size: 16px;
  }

  @media screen and (max-width: 320px) {
    width: 90%;
  }
`;

export const RemoveEntryButton = styled(EditEntryButton)`
  background-color: ${customRed};
  animation: 1s ${zoomInRightAnimation};

  &:hover {
    background-color: ${customRed};
  }
`;

export const BackButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  position: fixed;
  left: 10px;
  bottom: 22px;
  background-color: ${customGrey};
  color: ${customBlack};
  border: 2px solid ${customBlack};
  z-index: 10;
  outline: none;
  cursor: pointer;

  @media screen and (max-width: 850px) {
    height: 60px;
    width: 60px;
  }

  @media screen and (max-width: 450px) {
    height: 55px;
    width: 55px;
    bottom: 25px;
  }
`;

export const OrangeButton = styled(Button)`
  background-color: ${customOrange};

  &:hover {
    background-color: ${customLightGreen};
    color: ${customBlack};
    text-shadow: none;

    @media screen and (max-width: 1366px) {
      background-color: unset;
      color: unset;
    }
  }
`;
