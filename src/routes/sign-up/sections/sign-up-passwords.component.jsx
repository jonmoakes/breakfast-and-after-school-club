import { useSelector } from "react-redux";

import useHideSignUpPasswordOnEmpty from "../sign-up-form-hooks/use-hide-sign-up-password-on-empty";
import useGetPasswordIsVisibleSelectors from "../../../hooks/get-selectors/use-get-password-is-visible-selectors";
import usePasswordIsVisibleActions from "../../../hooks/get-actions-and-thunks/use-password-is-visible-actions";

import { selectSignUpFormSelectors } from "../../../store/sign-up-form/sign-up-form.slice";

import { RelativePositionDiv } from "../../../styles/div/div.styles";
import { Label, PasswordInput } from "../../../styles/form/form.styles";
import {
  ToggleSignUpPassword,
  ToggleSignUpConfirmPassword,
  RedSpan,
} from "../../../styles/span/span.styles";

import {
  minEightCharacters,
  confirmYourPassword,
} from "../../../strings/placeholders/placeholders-strings";

const SignUpPasswords = ({ handleSignUpFormChange }) => {
  useHideSignUpPasswordOnEmpty();
  const { signUpPasswordIsVisible, signUpConfirmPasswordIsVisible } =
    useGetPasswordIsVisibleSelectors();
  const {
    dispatchToggleSignUpPasswordIsVisible,
    dispatchToggleSignUpConfirmPasswordIsVisible,
  } = usePasswordIsVisibleActions();

  const { signUpFormDetails } = useSelector(selectSignUpFormSelectors);

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
          type={signUpPasswordIsVisible ? "text" : "password"}
        />

        {password.length ? (
          <ToggleSignUpPassword
            {...{ signUpPasswordIsVisible }}
            onClick={dispatchToggleSignUpPasswordIsVisible}
          />
        ) : null}
      </RelativePositionDiv>

      <Label>
        <RedSpan>* </RedSpan>confirm password:
      </Label>
      <RelativePositionDiv>
        <PasswordInput
          type={signUpConfirmPasswordIsVisible ? "text" : "password"}
          name="confirmPassword"
          onChange={handleSignUpFormChange}
          placeholder={confirmYourPassword}
          required
        />

        {confirmPassword.length ? (
          <ToggleSignUpConfirmPassword
            {...{ signUpConfirmPasswordIsVisible }}
            onClick={dispatchToggleSignUpConfirmPasswordIsVisible}
          />
        ) : null}
      </RelativePositionDiv>
    </>
  );
};

export default SignUpPasswords;
