import { useSelector } from "react-redux";

import useTogglePasswordVisibility from "../../../hooks/use-toggle-password-visibility";
import useResetPasswordVisibility from "../sign-in-form-hooks/use-reset-password-visibility";

import { selectSignInFormDetails } from "../../../store/sign-in-form/sign-in-form.selector";

import { RelativePositionDiv } from "../../../styles/div/div.styles";
import { Label, PasswordInput } from "../../../styles/form/form.styles";
import { TogglePassword } from "../../../styles/span/span.styles";

import { enterYourPassword } from "../../../strings/strings";

const SignInPassword = ({ handleSignInFormChange }) => {
  const { isVisible, togglePasswordVisibility, setIsVisible } =
    useTogglePasswordVisibility();
  useResetPasswordVisibility(setIsVisible);

  const signUpFormDetails = useSelector(selectSignInFormDetails);
  const { password } = signUpFormDetails;

  return (
    <>
      <Label>password:</Label>
      <RelativePositionDiv>
        <PasswordInput
          name="password"
          value={password || ""}
          onChange={handleSignInFormChange}
          required
          placeholder={enterYourPassword}
          type={isVisible ? "text" : "password"}
        />

        {password.length ? (
          <TogglePassword
            {...{ isVisible }}
            onClick={togglePasswordVisibility}
          />
        ) : null}
      </RelativePositionDiv>
    </>
  );
};

export default SignInPassword;
