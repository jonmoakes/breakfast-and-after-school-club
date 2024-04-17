import useHideSignInPasswordOnEmpty from "../sign-in-form-hooks/use-hide-sign-in-password-on-empty";
import useGetPasswordIsVisibleSelectors from "../../../hooks/get-selectors/use-get-password-is-visible-selectors";
import usePasswordIsVisibleActions from "../../../hooks/get-actions-and-thunks/use-password-is-visible-actions";
import useGetSignInFormSelectors from "../../../hooks/get-selectors/use-get-sign-in-form-selectors";

import { RelativePositionDiv } from "../../../styles/div/div.styles";
import { Label, PasswordInput } from "../../../styles/form/form.styles";
import { ToggleSignInPassword } from "../../../styles/span/span.styles";

const SignInPassword = ({ dispatchHandleSignInFormChange }) => {
  useHideSignInPasswordOnEmpty();
  const { password } = useGetSignInFormSelectors();
  const { signInPasswordIsVisible } = useGetPasswordIsVisibleSelectors();

  const { dispatchToggleSignInPasswordIsVisible } =
    usePasswordIsVisibleActions();

  return (
    <>
      <Label>password:</Label>
      <RelativePositionDiv>
        <PasswordInput
          name="password"
          onChange={dispatchHandleSignInFormChange}
          value={password || ""}
          required
          type={signInPasswordIsVisible ? "text" : "password"}
        />

        {password.length ? (
          <ToggleSignInPassword
            {...{ signInPasswordIsVisible }}
            onClick={dispatchToggleSignInPasswordIsVisible}
          />
        ) : null}
      </RelativePositionDiv>
    </>
  );
};

export default SignInPassword;
