import { useSelector, useDispatch } from "react-redux";

import useHideSignUpPasswordOnEmpty from "../sign-up-form-hooks/use-hide-sign-up-password-on-empty";

import {
  toggleSignUpPasswordIsVisible,
  toggleSignUpConfirmPasswordIsVisible,
  selectPasswordIsVisibleSelectors,
} from "../../../store/password-is-visible/password-is-visible.slice";

import { selectSignUpFormDetails } from "../../../store/sign-up-form/sign-up-form.selector";

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
} from "../../../strings/strings";

const SignUpPasswords = ({ handleSignUpFormChange }) => {
  useHideSignUpPasswordOnEmpty();
  const { signUpPasswordIsVisible, signUpConfirmPasswordIsVisible } =
    useSelector(selectPasswordIsVisibleSelectors);
  const signUpFormDetails = useSelector(selectSignUpFormDetails);

  const dispatch = useDispatch();
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
            onClick={() => dispatch(toggleSignUpPasswordIsVisible())}
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
            onClick={() => dispatch(toggleSignUpConfirmPasswordIsVisible())}
          />
        ) : null}
      </RelativePositionDiv>
    </>
  );
};

export default SignUpPasswords;
