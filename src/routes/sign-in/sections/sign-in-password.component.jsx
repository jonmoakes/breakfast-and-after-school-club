import { useSelector } from "react-redux";

import useHideSignInPasswordOnEmpty from "../sign-in-form-hooks/use-hide-sign-in-password-on-empty";
import useGetPasswordIsVisibleSelectors from "../../../hooks/get-selectors/use-get-password-is-visible-selectors";
import usePasswordIsVisibleActions from "../../../hooks/get-actions-and-thunks/use-password-is-visible-actions";

import { selectSignInFormSelectors } from "../../../store/sign-in-form/sign-in-form.slice";

import { RelativePositionDiv } from "../../../styles/div/div.styles";
import { Label, PasswordInput } from "../../../styles/form/form.styles";
import { ToggleSignInPassword } from "../../../styles/span/span.styles";

const SignInPassword = ({ handleSignInFormChange }) => {
  useHideSignInPasswordOnEmpty();
  const { signInPasswordIsVisible } = useGetPasswordIsVisibleSelectors();
  const { dispatchToggleSignInPasswordIsVisible } =
    usePasswordIsVisibleActions();

  const { signInFormDetails } = useSelector(selectSignInFormSelectors);

  const { password } = signInFormDetails;

  return (
    <>
      <Label>password:</Label>
      <RelativePositionDiv>
        <PasswordInput
          name="password"
          onChange={handleSignInFormChange}
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
