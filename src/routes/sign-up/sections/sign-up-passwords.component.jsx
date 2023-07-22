import { useSelector } from "react-redux";

import useTogglePasswordVisibility from "../../../hooks/use-toggle-password-visibility";
import useResetPasswordVisibility from "../sign-up-form-hooks/use-reset-password-visibility";

import { selectSignUpFormDetails } from "../../../store/sign-up-form/sign-up-form.selector";

import { RelativePositionDiv } from "../../../styles/div/div.styles";
import { Label, PasswordInput } from "../../../styles/form/form.styles";
import {
  TogglePassword,
  ToggleConfirmPassword,
  RedSpan,
} from "../../../styles/span/span.styles";

import {
  minEightCharacters,
  confirmYourPassword,
} from "../../../strings/strings";

const SignUpPasswords = ({ handleSignUpFormChange }) => {
  const {
    isVisible,
    confirmIsVisible,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
    setIsVisible,
    setConfirmIsVisible,
  } = useTogglePasswordVisibility();
  useResetPasswordVisibility(setIsVisible, setConfirmIsVisible);

  const signUpFormDetails = useSelector(selectSignUpFormDetails);
  const { password, confirmPassword } = signUpFormDetails;

  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>password:
      </Label>
      <RelativePositionDiv>
        <PasswordInput
          name="password"
          onChange={handleSignUpFormChange}
          placeholder={minEightCharacters}
          required
          type={isVisible ? "text" : "password"}
        />

        {password.length ? (
          <TogglePassword
            {...{ isVisible }}
            onClick={togglePasswordVisibility}
          />
        ) : null}
      </RelativePositionDiv>

      <Label>
        <RedSpan>* </RedSpan>confirm password:
      </Label>
      <RelativePositionDiv>
        <PasswordInput
          type={confirmIsVisible ? "text" : "password"}
          name="confirmPassword"
          onChange={handleSignUpFormChange}
          placeholder={confirmYourPassword}
          required
        />

        {confirmPassword.length ? (
          <ToggleConfirmPassword
            {...{ confirmIsVisible }}
            onClick={toggleConfirmPasswordVisibility}
          />
        ) : null}
      </RelativePositionDiv>
    </>
  );
};

export default SignUpPasswords;
