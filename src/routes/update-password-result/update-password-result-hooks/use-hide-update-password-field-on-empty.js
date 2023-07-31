import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectUpdatePasswordIsVisible,
  selectUpdatePasswordConfirmPasswordIsVisible,
} from "../../../store/password-is-visible/password-is-visible.selector";
import {
  hideUpdatePasswordIsVisible,
  hideUpdatePasswordConfirmPasswordIsVisible,
} from "../../../store/password-is-visible/password-is-visible.slice";
import { selectUpdatePasswordDetails } from "../../../store/update-password/update-password.selector";

const useHideUpdatePasswordFieldsOnEmpty = () => {
  const updatePasswordIsVisible = useSelector(selectUpdatePasswordIsVisible);
  const updatePasswordConfirmPasswordIsVisible = useSelector(
    selectUpdatePasswordConfirmPasswordIsVisible
  );
  const updatePasswordDetails = useSelector(selectUpdatePasswordDetails);

  const dispatch = useDispatch();
  const { updatePasswordNewPassword, updatePasswordConfirmNewPassword } =
    updatePasswordDetails;

  useEffect(() => {
    if (updatePasswordIsVisible && !updatePasswordNewPassword.length) {
      dispatch(hideUpdatePasswordIsVisible());
    } else if (
      updatePasswordConfirmPasswordIsVisible &&
      !updatePasswordConfirmNewPassword.length
    ) {
      dispatch(hideUpdatePasswordConfirmPasswordIsVisible());
    }
  }, [
    updatePasswordNewPassword,
    updatePasswordConfirmNewPassword,
    updatePasswordConfirmPasswordIsVisible,
    updatePasswordIsVisible,
    dispatch,
  ]);
};

export default useHideUpdatePasswordFieldsOnEmpty;
