import { useSelector, useDispatch } from "react-redux";

import useHideSignInPasswordOnEmpty from "../sign-in-form-hooks/use-hide-sign-in-password-on-empty";

import { selectSignInPasswordIsVisible } from "../../../store/password-is-visible/password-is-visible.selector";
import { toggleSignInPasswordIsVisible } from "../../../store/password-is-visible/password-is-visible.slice";

import { selectSignInFormDetails } from "../../../store/sign-in-form/sign-in-form.selector";

import { RelativePositionDiv } from "../../../styles/div/div.styles";
import { Label, PasswordInput } from "../../../styles/form/form.styles";
import { ToggleSignInPassword } from "../../../styles/span/span.styles";

const SignInPassword = ({ handleSignInFormChange }) => {
  useHideSignInPasswordOnEmpty();

  const signInPasswordIsVisible = useSelector(selectSignInPasswordIsVisible);
  const signUpFormDetails = useSelector(selectSignInFormDetails);

  const dispatch = useDispatch();
  const { password } = signUpFormDetails;

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
