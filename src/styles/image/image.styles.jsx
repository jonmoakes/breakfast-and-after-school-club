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
