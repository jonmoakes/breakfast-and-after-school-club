import styled from "styled-components";
import { customBlack, customRed, customBlue } from "../colors";

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

export const BlueSpan = styled.span`
  color: ${customBlue};
`;

export const SmallSpan = styled.span`
  font-size: 16px;
  color: ${customBlack};
`;

export const ToggleSignInPassword = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "signInPasswordIsVisible",
})`
  position: absolute;
  top: 62%;
  right: 50px;
  transform: translateY(-50%);
  cursor: pointer;
  width: 40px;
  height: 24px;
  background-image: ${(props) =>
    `url(${props.signInPasswordIsVisible ? eyeIconHide : eyeIcon})`};
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 1366px) {
    right: 30px;
  }

  @media screen and (max-width: 450px) {
    right: 20px;
  }
`;

export const ToggleSignUpPassword = styled(ToggleSignInPassword).withConfig({
  shouldForwardProp: (prop) => prop !== "signUpPasswordIsVisible",
})`
  background-image: ${(props) =>
    `url(${props.signUpPasswordIsVisible ? eyeIconHide : eyeIcon})`};
`;

export const ToggleSignUpConfirmPassword = styled(
  ToggleSignInPassword
).withConfig({
  shouldForwardProp: (prop) => prop !== "signUpConfirmPasswordIsVisible",
})`
  background-image: ${(props) =>
    `url(${props.signUpConfirmPasswordIsVisible ? eyeIconHide : eyeIcon})`};
  width: ${(props) =>
    `url(${props.signUpConfirmPasswordIsVisible ? "25px" : "30px"})`};
`;

export const ToggleResetPassword = styled(ToggleSignInPassword).withConfig({
  shouldForwardProp: (prop) => prop !== "resetPasswordIsVisible",
})`
  background-image: ${(props) =>
    `url(${props.resetPasswordIsVisible ? eyeIconHide : eyeIcon})`};
`;

export const ToggleResetPasswordConfirmPassword = styled(
  ToggleSignInPassword
).withConfig({
  shouldForwardProp: (prop) => prop !== "resetPasswordConfirmPasswordIsVisible",
})`
  background-image: ${(props) =>
    `url(${
      props.resetPasswordConfirmPasswordIsVisible ? eyeIconHide : eyeIcon
    })`};
  width: ${(props) =>
    `url(${props.resetPasswordConfirmPasswordIsVisible ? "25px" : "30px"})`};
`;

export const ToggleUpdateEmailPassword = styled(
  ToggleSignInPassword
).withConfig({
  shouldForwardProp: (prop) => prop !== "updateEmailPasswordIsVisible",
})`
  background-image: ${(props) =>
    `url(${props.updateEmailPasswordIsVisible ? eyeIconHide : eyeIcon})`};
`;

export const ToggleUpdatePassword = styled(ToggleSignInPassword).withConfig({
  shouldForwardProp: (prop) => prop !== "updatePasswordIsVisible",
})`
  background-image: ${(props) =>
    `url(${props.updatePasswordIsVisible ? eyeIconHide : eyeIcon})`};
`;

export const ToggleConfirmUpdatePassword = styled(
  ToggleSignInPassword
).withConfig({
  shouldForwardProp: (prop) =>
    prop !== "updatePasswordConfirmPasswordIsVisible",
})`
  background-image: ${(props) =>
    `url(${
      props.updatePasswordConfirmPasswordIsVisible ? eyeIconHide : eyeIcon
    })`};
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

export const LowercasedSpan = styled.span`
  text-transform: lowercase;
`;

export const BlueLowercasedSpan = styled(LowercasedSpan)`
  color: ${customBlue};
`;
