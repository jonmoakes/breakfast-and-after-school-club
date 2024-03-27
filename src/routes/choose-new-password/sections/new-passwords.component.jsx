import useHideResetPasswordFieldsOnEmpty from "../choose-new-password-hooks/use-hide-reset-password-fields-on-empty";
import useChooseNewPasswordActions from "../../../hooks/get-actions-and-thunks/choose-new-password-actions-and-thunks/use-choose-new-password-actions";
import useGetChooseNewPasswordSelectors from "../../../hooks/get-selectors/use-get-choose-new-password-selectors";
import useGetPasswordIsVisibleSelectors from "../../../hooks/get-selectors/use-get-password-is-visible-selectors";
import usePasswordIsVisibleActions from "../../../hooks/get-actions-and-thunks/use-password-is-visible-actions";

import { Label, PasswordInput } from "../../../styles/form/form.styles";
import {
  ToggleResetPassword,
  ToggleResetPasswordConfirmPassword,
} from "../../../styles/span/span.styles";
import { RelativePositionDiv } from "../../../styles/div/div.styles";

import {
  confirmYourPassword,
  minEightCharacters,
} from "../../../strings/placeholders/placeholders-strings";

const NewPasswords = () => {
  useHideResetPasswordFieldsOnEmpty();
  const { newPassword, confirmNewPassword } =
    useGetChooseNewPasswordSelectors();
  const { resetPasswordIsVisible, resetPasswordConfirmPasswordIsVisible } =
    useGetPasswordIsVisibleSelectors();
  const { dispatchHandleChooseNewPasswordFormChange } =
    useChooseNewPasswordActions();
  const {
    dispatchToggleResetPasswordIsVisible,
    dispatchToggleResetPasswordConfirmPasswordIsVisible,
  } = usePasswordIsVisibleActions();

  return (
    <>
      <RelativePositionDiv>
        <Label>new password</Label>
        <PasswordInput
          name="newPassword"
          onChange={dispatchHandleChooseNewPasswordFormChange}
          placeholder={minEightCharacters}
          value={newPassword || ""}
          required
          type={resetPasswordIsVisible ? "text" : "password"}
        />

        {newPassword.length ? (
          <ToggleResetPassword
            {...{ resetPasswordIsVisible }}
            onClick={dispatchToggleResetPasswordIsVisible}
          />
        ) : null}
      </RelativePositionDiv>

      <RelativePositionDiv>
        <Label>confirm new password</Label>
        <PasswordInput
          name="confirmNewPassword"
          onChange={dispatchHandleChooseNewPasswordFormChange}
          placeholder={confirmYourPassword}
          value={confirmNewPassword || ""}
          required
          type={resetPasswordConfirmPasswordIsVisible ? "text" : "password"}
        />

        {confirmNewPassword.length ? (
          <ToggleResetPasswordConfirmPassword
            {...{ resetPasswordConfirmPasswordIsVisible }}
            onClick={dispatchToggleResetPasswordConfirmPasswordIsVisible}
          />
        ) : null}
      </RelativePositionDiv>
    </>
  );
};

export default NewPasswords;
