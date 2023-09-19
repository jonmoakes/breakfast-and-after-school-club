import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";

import {
  customBlack,
  customBlue,
  customLightGreen,
  customWhite,
  customYellow,
} from "../colors";

const PulseAnimation = keyframes`${pulse}`;

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
    text-shadow: 0.5px 0.5px 0.5px ${customBlack};

    @media screen and (max-width: 1366px) {
      transform: none;
      transition: none;
      box-shadow: none;
      text-shadow: none;

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
