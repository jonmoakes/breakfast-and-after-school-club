import { useSelector } from "react-redux";

import useTogglePasswordVisibility from "../../../hooks/use-toggle-password-visibility";
import useResetPasswordVisibility from "../sign-up-form-hooks/use-reset-password-visibility";

import { selectSignUpFormDetails } from "../../../store/sign-up-form/sign-up-form.selector";

import { PasswordWrapper } from "../../../styles/div/div.styles";
import { Label, PasswordInput } from "../../../styles/form/form.styles";
import {
  TogglePassword,
  ToggleConfirmPassword,
} from "../../../styles/span/span.styles";

import {
  minSixCharacters,
  confirmYourPassword,
} from "../../../strings/strings";

const Passwords = ({ handleSignUpFormChange }) => {
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
      <Label>password:</Label>
      <PasswordWrapper>
        <PasswordInput
          name="password"
          value={password || ""}
          onChange={handleSignUpFormChange}
          placeholder={minSixCharacters}
          required
          type={isVisible ? "text" : "password"}
        />

        {password.length ? (
          <TogglePassword
            {...{ isVisible }}
            onClick={togglePasswordVisibility}
          />
        ) : null}
      </PasswordWrapper>

      <Label>confirm password:</Label>
      <PasswordWrapper>
        <PasswordInput
          type={confirmIsVisible ? "text" : "password"}
          name="confirmPassword"
          value={confirmPassword || ""}
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
      </PasswordWrapper>
    </>
  );
};

export default Passwords;
