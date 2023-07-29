import { useSelector, useDispatch } from "react-redux";

import useHideResetPasswordFieldsOnEmpty from "../forgot-password-result-hooks/use-hide-reset-password-fields-on-empty";

import { selectNewPasswordDetails } from "../../../store/forgot-password/forgot-password.selector";
import {
  selectResetPasswordIsVisible,
  selectResetPasswordConfirmPasswordIsVisible,
} from "../../../store/password-is-visible/password-is-visible.selector";
import {
  toggleResetPasswordIsVisible,
  toggleResetPasswordConfirmPasswordIsVisible,
} from "../../../store/password-is-visible/password-is-visible.slice";

import { Label, PasswordInput } from "../../../styles/form/form.styles";
import {
  ToggleResetPassword,
  ToggleResetPasswordConfirmPassword,
} from "../../../styles/span/span.styles";
import { RelativePositionDiv } from "../../../styles/div/div.styles";

import {
  confirmYourPassword,
  minEightCharacters,
} from "../../../strings/strings";

const NewPasswords = ({ handleResetPasswordFormChange }) => {
  useHideResetPasswordFieldsOnEmpty();

  const newPasswordDetails = useSelector(selectNewPasswordDetails);
  const resetPasswordIsVisible = useSelector(selectResetPasswordIsVisible);
  const resetPasswordConfirmPasswordIsVisible = useSelector(
    selectResetPasswordConfirmPasswordIsVisible
  );

  const dispatch = useDispatch();
  const { newPassword, confirmNewPassword } = newPasswordDetails;

  return (
    <>
      <RelativePositionDiv>
        <Label>new password</Label>
        <PasswordInput
          name="newPassword"
          onChange={handleResetPasswordFormChange}
          placeholder={minEightCharacters}
          value={newPassword || ""}
          required
          type={resetPasswordIsVisible ? "text" : "password"}
        />

        {newPassword.length ? (
          <ToggleResetPassword
            {...{ resetPasswordIsVisible }}
            onClick={() => dispatch(toggleResetPasswordIsVisible())}
          />
        ) : null}
      </RelativePositionDiv>

      <RelativePositionDiv>
        <Label>confirm new password</Label>
        <PasswordInput
          name="confirmNewPassword"
          onChange={handleResetPasswordFormChange}
          placeholder={confirmYourPassword}
          value={confirmNewPassword || ""}
          required
          type={resetPasswordConfirmPasswordIsVisible ? "text" : "password"}
        />

        {confirmNewPassword.length ? (
          <ToggleResetPasswordConfirmPassword
            {...{ resetPasswordConfirmPasswordIsVisible }}
            onClick={() =>
              dispatch(toggleResetPasswordConfirmPasswordIsVisible())
            }
          />
        ) : null}
      </RelativePositionDiv>
    </>
  );
};

export default NewPasswords;
