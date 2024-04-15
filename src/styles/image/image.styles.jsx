import styled, { keyframes } from "styled-components";
import { rotateInDownLeft, rotateInDownRight, pulse } from "react-animations";

import { customBlack, customOrange, customRed } from "../colors";

const rotateInLeftAnimation = keyframes`${rotateInDownLeft}`;
const rotateInRightAnimation = keyframes`${rotateInDownRight}`;
const PulseAnimation = keyframes`${pulse}`;

export const StyledImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 5px;

  &.loading {
    filter: blur(10px);
    clip-path: inset(0);
  }
  &.loaded {
    filter: blur(0px);
    transition: filter 0.5s linear;
    border: 2px solid ${customBlack};
  }

  @media screen and (max-width: 450px) {
    width: 180px;
    height: 180px;
  }
`;

export const LogoImage = styled.img`
  height: 80px;
  width: 80px;
  margin-left: 20px;
  border-radius: 5px;
  border: 1px solid ${customBlack};
`;

export const Icon = styled.img`
  width: 70px;
  height: 70px;
  background-color: transparent;
  position: relative;
  right: 6px;
  top: -1px;

  &.top-floating-button {
    width: 50px;
    height: 50px;
    padding: 10px;
    background-color: ${customOrange};
    border: 1px solid ${customBlack};
    border-radius: 5px;
    animation: infinite 1s ${PulseAnimation};

    @media screen and (max-width: 600px) {
      width: 40px;
      height: 40px;
      padding: 5px;
    }
  }

  &.bottom-floating-button {
    width: 50px;
    height: 50px;
    padding: 10px;
    background-color: ${customRed};
    border: 1px solid ${customBlack};
    border-radius: 5px;
    animation: infinite 1s ${PulseAnimation};

    @media screen and (max-width: 600px) {
      width: 40px;
      height: 40px;
      padding: 5px;
    }
  }

  @media screen and (max-width: 600px) {
    width: 60px;
    height: 60px;
  }
`;

export const SocialImage = styled.img`
  width: 75px;
  height: 75px;
  transition: all 0.5s ease-in-out;
  margin: 0px 20px;
  border: 1px solid ${customBlack};
  border-radius: 10px;
  animation: 1.5s ${rotateInRightAnimation};

  &.fb {
    width: 70px;
    height: 70px;
    animation: 1.5s ${rotateInLeftAnimation};
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.2);

    @media screen and (max-width: 1366px) {
      transform: none;
      transition: none;
    }
  }

  @media screen and (max-width: 320px) {
    width: 50px;
    height: 50px;

    &.fb {
      width: 47px;
      height: 47px;
    }
  }

  @media screen and (max-width: 280px) {
    margin: 10px auto;
  }
`;

export const IconImage = styled.img`
  height: 40px;
  width: 40px;
  transition: all 1s ease-in-out;
  animation: infinite 1s ${PulseAnimation};

  &:hover {
    cursor: pointer;
  }

  &.email {
    height: 38px;
    width: 38px;

    @media screen and (max-width: 450px) {
      height: 28px;
      width: 28px;
    }
  }

  @media screen and (max-width: 450px) {
    height: 30px;
    width: 30px;
  }
`;
