import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useFireSwal from "../../../hooks/use-fire-swal";

import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectNewPasswordDetails } from "../../../store/forgot-password-result/forgot-password-result.selector";
import {
  submitForgotPasswordResultAsync,
  clearNewPasswordDetails,
} from "../../../store/forgot-password-result/forgot-password-result.slice";

import {
  imSureMessage,
  mustBeSignedInMessage,
  signInRoute,
  sureResetPasswordMessage,
} from "../../../strings/strings";

const useConfirmResetPassword = () => {
  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();

  const currentUser = useSelector(selectCurrentUser);
  const newPasswordDetails = useSelector(selectNewPasswordDetails);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const confirmResult = () => {
    if (!currentUser) {
      fireSwal("error", mustBeSignedInMessage, "", 0, true, false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            dispatch(clearNewPasswordDetails());
            navigate(signInRoute);
          }
        }
      );
    } else {
      dispatch(submitForgotPasswordResultAsync({ newPasswordDetails }));
    }
  };

  const confirmResetPassword = () => {
    confirmSwal(sureResetPasswordMessage, "", imSureMessage, confirmResult);
  };
  return { confirmResetPassword };
};

export default useConfirmResetPassword;
