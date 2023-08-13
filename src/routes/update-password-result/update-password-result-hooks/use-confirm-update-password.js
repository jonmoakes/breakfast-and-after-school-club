import { useDispatch, useSelector } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { selectUpdatePasswordDetails } from "../../../store/update-password-result/update-password-result.selector";
import { updatePasswordResultAsync } from "../../../store/update-password-result/update-password-result.slice";

import {
  imSureMessage,
  sureUpdatePasswordMessage,
} from "../../../strings/strings";

const useHandleUpdatePasswordSubmit = () => {
  const { confirmSwal } = useConfirmSwal();

  const updatePasswordDetails = useSelector(selectUpdatePasswordDetails);

  const dispatch = useDispatch();

  const { updatePasswordNewPassword, updatePasswordConfirmNewPassword } =
    updatePasswordDetails;

  const confirmResult = () => {
    dispatch(
      updatePasswordResultAsync({
        updatePasswordNewPassword,
        updatePasswordConfirmNewPassword,
      })
    );
  };

  const confirmUpdatePassword = () => {
    confirmSwal(sureUpdatePasswordMessage, "", imSureMessage, confirmResult);
  };

  return { confirmUpdatePassword };
};

export default useHandleUpdatePasswordSubmit;
