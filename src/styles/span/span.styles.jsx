import styled from "styled-components";
import { customBlack, customRed } from "../colors";

export const HamburgerSpan = styled.span`
  height: 6px;
  width: 35px;
  background-color: ${customBlack};
  margin-bottom: 4px;
  border-radius: 5px;
`;

export const HamburgerSpanCloseMenu = styled(HamburgerSpan)`
  background-color: ${customRed};
`;

export const BorderLink = styled.span`
  color: ${customBlack};
  border: 2px solid ${customBlack};
  padding: 5px;
  border-radius: 10px;
`;

export const RedSpan = styled.span`
  color: ${customRed};
`;
