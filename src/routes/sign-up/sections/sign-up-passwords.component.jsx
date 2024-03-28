import useSignUpFormActions from "../../../hooks/get-actions-and-thunks/use-sign-up-form-actions";
import useHideSignUpPasswordOnEmpty from "../sign-up-form-hooks/use-hide-sign-up-password-on-empty";
import useGetPasswordIsVisibleSelectors from "../../../hooks/get-selectors/use-get-password-is-visible-selectors";
import useGetSignUpFormSelectors from "../../../hooks/get-selectors/use-get-sign-up-form-selectors";
import usePasswordIsVisibleActions from "../../../hooks/get-actions-and-thunks/use-password-is-visible-actions";

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

const SignUpPasswords = () => {
  useHideSignUpPasswordOnEmpty();
  const { signUpPasswordIsVisible, signUpConfirmPasswordIsVisible } =
    useGetPasswordIsVisibleSelectors();
  const {
    dispatchToggleSignUpPasswordIsVisible,
    dispatchToggleSignUpConfirmPasswordIsVisible,
  } = usePasswordIsVisibleActions();
  const { dispatchHandleSignUpFormChange } = useSignUpFormActions();

  const { password, confirmPassword } = useGetSignUpFormSelectors();

  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>password:
      </Label>
      <RelativePositionDiv>
        <PasswordInput
          name="password"
          onChange={dispatchHandleSignUpFormChange}
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
          onChange={dispatchHandleSignUpFormChange}
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
