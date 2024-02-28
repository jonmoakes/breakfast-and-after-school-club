import { useSelector, useDispatch } from "react-redux";

import useHideSignInPasswordOnEmpty from "../sign-in-form-hooks/use-hide-sign-in-password-on-empty";

import {
  toggleSignInPasswordIsVisible,
  selectPasswordIsVisibleSelectors,
} from "../../../store/password-is-visible/password-is-visible.slice";
import { selectSignInFormSelectors } from "../../../store/sign-in-form/sign-in-form.slice";

import { RelativePositionDiv } from "../../../styles/div/div.styles";
import { Label, PasswordInput } from "../../../styles/form/form.styles";
import { ToggleSignInPassword } from "../../../styles/span/span.styles";

const SignInPassword = ({ handleSignInFormChange }) => {
  useHideSignInPasswordOnEmpty();

  const { signInPasswordIsVisible } = useSelector(
    selectPasswordIsVisibleSelectors
  );
  const { signInFormDetails } = useSelector(selectSignInFormSelectors);

  const dispatch = useDispatch();
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
            onClick={() => dispatch(toggleSignInPasswordIsVisible())}
          />
        ) : null}
      </RelativePositionDiv>
    </>
  );
};

export default SignInPassword;
