import styled from "styled-components";
import { customBlue } from "../colors";

export const BlueH2 = styled.h2`
  color: ${customBlue};
  text-decoration: underline;

  &.no-underline {
    text-decoration: none;
  }
`;
