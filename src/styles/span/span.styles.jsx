import styled from "styled-components";
import { customBlack, customRed } from "../colors";

import eyeIcon from "../../assets/eye.png";
import eyeIconHide from "../../assets/hide-eye.png";

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

export const TogglePassword = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "isVisible",
})`
  position: absolute;
  top: 50%;
  right: 50px;
  transform: translateY(-50%);
  cursor: pointer;
  width: 40px;
  height: 24px;
  background-image: ${(props) =>
    `url(${props.isVisible ? eyeIconHide : eyeIcon})`};
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 1366px) {
    right: 30px;
  }

  @media screen and (max-width: 450px) {
    right: 20px;
  }
`;

export const ToggleConfirmPassword = styled(TogglePassword).withConfig({
  shouldForwardProp: (prop) => prop !== "confirmIsVisible",
})`
  background-image: ${(props) =>
    `url(${props.confirmIsVisible ? eyeIconHide : eyeIcon})`};
  width: ${(props) => `url(${props.confirmIsVisible ? "25px" : "30px"})`};
`;

export const HorizLine = styled.span`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:before,
  &:after {
    content: "";
    border-top: 2px solid;
    margin: 0 20px 0 0;
    flex: 1 0 20px;
  }

  &:after {
    margin: 0 0 0 20px;
  }

  @media screen and (max-width: 320px) {
    font-size: 14px;
  }
`;
