import { useSelector, useDispatch } from "react-redux";

import useHideResetPasswordFieldsOnEmpty from "../choose-new-password-hooks/use-hide-reset-password-fields-on-empty";
import useHandleChooseNewPasswordFormChange from "../choose-new-password-hooks/use-handle-choose-new-password-form-change";

import { selectChooseNewPasswordSelectors } from "../../../store/choose-new-password/choose-new-password.slice";
import {
  toggleResetPasswordIsVisible,
  toggleResetPasswordConfirmPasswordIsVisible,
  selectPasswordIsVisibleSelectors,
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

const NewPasswords = () => {
  const { handleChooseNewPasswordFormChange } =
    useHandleChooseNewPasswordFormChange();
  useHideResetPasswordFieldsOnEmpty();

  const { newPasswordDetails } = useSelector(selectChooseNewPasswordSelectors);
  const { resetPasswordIsVisible, resetPasswordConfirmPasswordIsVisible } =
    useSelector(selectPasswordIsVisibleSelectors);
  const dispatch = useDispatch();
  const { newPassword, confirmNewPassword } = newPasswordDetails;

  return (
    <>
      <RelativePositionDiv>
        <Label>new password</Label>
        <PasswordInput
          name="newPassword"
          onChange={handleChooseNewPasswordFormChange}
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
          onChange={handleChooseNewPasswordFormChange}
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
