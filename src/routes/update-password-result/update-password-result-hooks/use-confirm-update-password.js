import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useFireSwal from "../../../hooks/use-fire-swal";

import { selectUpdatePasswordDetails } from "../../../store/update-password-result/update-password-result.selector";
import {
  clearNewPasswordDetails,
  updatePasswordResultAsync,
} from "../../../store/update-password-result/update-password-result.slice";

import {
  imSureMessage,
  passwordUpdateMustBeSignedInMessage,
  signInRoute,
  sureUpdatePasswordMessage,
} from "../../../strings/strings";
import { selectCurrentUser } from "../../../store/user/user.selector";

const useHandleUpdatePasswordSubmit = () => {
  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();

  const currentUser = useSelector(selectCurrentUser);
  const updatePasswordDetails = useSelector(selectUpdatePasswordDetails);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { updatePasswordNewPassword, updatePasswordConfirmNewPassword } =
    updatePasswordDetails;

  const confirmResult = () => {
    if (!currentUser) {
      fireSwal(
        "error",
        passwordUpdateMustBeSignedInMessage,
        "",
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(clearNewPasswordDetails());
          navigate(signInRoute);
        }
      });
    } else {
      dispatch(
        updatePasswordResultAsync({
          updatePasswordNewPassword,
          updatePasswordConfirmNewPassword,
        })
      );
    }
  };

  const confirmUpdatePassword = () => {
    confirmSwal(sureUpdatePasswordMessage, "", imSureMessage, confirmResult);
  };

  return { confirmUpdatePassword };
};

export default useHandleUpdatePasswordSubmit;
