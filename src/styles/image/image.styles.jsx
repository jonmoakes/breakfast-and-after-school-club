import styled from "styled-components";

import { customBlack } from "../colors";

export const StyledImage = styled.img`
  width: 90%;
  height: 90%;
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
`;

export const LogoImage = styled.img`
  height: 80px;
  width: 80px;
  margin-left: 20px;
  border-radius: 5px;
  padding-bottom: 1px;
`;

export const SocialImage = styled.img`
  width: 75px;
  height: 75px;
  transition: all 0.5s ease-in-out;
  margin: 0px 20px;

  &.fb {
    width: 61px;
    height: 61px;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.2);

    @media screen and (max-width: 1366px) {
      transform: none;
      transition: none;
    }
  }

  @media screen and (max-width: 600px) {
    width: 50px;
    height: 50px;

    &.fb {
      width: 44px;
      height: 44px;
    }
  }

  @media screen and (max-width: 280px) {
    margin: 10px auto;
  }
`;

export const AddIcon = styled.img`
  width: 70px;
  height: 70px;
  background-color: transparent;
  position: relative;
  right: 6px;
  top: -1px;

  @media screen and (max-width: 600px) {
    width: 60px;
    height: 60px;
  }
`;
