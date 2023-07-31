import { useSelector, useDispatch } from "react-redux";

import useHideUpdatePasswordFieldsOnEmpty from "../update-password-result-hooks/use-hide-update-password-field-on-empty";
import useHandleUpdatePasswordFormChange from "../update-password-result-hooks/use-handle-update-password-form-change";

import { selectUpdatePasswordDetails } from "../../../store/update-password/update-password.selector";
import {
  selectUpdatePasswordIsVisible,
  selectUpdatePasswordConfirmPasswordIsVisible,
} from "../../../store/password-is-visible/password-is-visible.selector";
import {
  toggleUpdatePasswordIsVisible,
  toggleUpdatePasswordConfirmPasswordIsVisible,
} from "../../../store/password-is-visible/password-is-visible.slice";

import { Label, PasswordInput } from "../../../styles/form/form.styles";
import {
  ToggleUpdatePassword,
  ToggleConfirmUpdatePassword,
} from "../../../styles/span/span.styles";
import { RelativePositionDiv } from "../../../styles/div/div.styles";

import {
  minEightCharacters,
  confirmYourPassword,
} from "../../../strings/strings";

const NewPasswords = () => {
  useHideUpdatePasswordFieldsOnEmpty();
  const { handleUpdatePasswordFormChange } =
    useHandleUpdatePasswordFormChange();

  const updatePasswordDetails = useSelector(selectUpdatePasswordDetails);
  const updatePasswordIsVisible = useSelector(selectUpdatePasswordIsVisible);
  const updatePasswordConfirmPasswordIsVisible = useSelector(
    selectUpdatePasswordConfirmPasswordIsVisible
  );

  const dispatch = useDispatch();
  const { updatePasswordNewPassword, updatePasswordConfirmNewPassword } =
    updatePasswordDetails;

  return (
    <>
      <RelativePositionDiv>
        <Label>new password</Label>
        <PasswordInput
          name="updatePasswordNewPassword"
          onChange={handleUpdatePasswordFormChange}
          placeholder={minEightCharacters}
          value={updatePasswordNewPassword || ""}
          required
          type={updatePasswordIsVisible ? "text" : "password"}
        />

        {updatePasswordNewPassword.length ? (
          <ToggleUpdatePassword
            {...{ updatePasswordIsVisible }}
            onClick={() => dispatch(toggleUpdatePasswordIsVisible())}
          />
        ) : null}
      </RelativePositionDiv>

      <RelativePositionDiv>
        <Label>confirm new password</Label>
        <PasswordInput
          name="updatePasswordConfirmNewPassword"
          onChange={handleUpdatePasswordFormChange}
          placeholder={confirmYourPassword}
          value={updatePasswordConfirmNewPassword || ""}
          required
          type={updatePasswordConfirmPasswordIsVisible ? "text" : "password"}
        />

        {updatePasswordConfirmNewPassword.length ? (
          <ToggleConfirmUpdatePassword
            {...{ updatePasswordConfirmPasswordIsVisible }}
            onClick={() =>
              dispatch(toggleUpdatePasswordConfirmPasswordIsVisible())
            }
          />
        ) : null}
      </RelativePositionDiv>
    </>
  );
};

export default NewPasswords;
