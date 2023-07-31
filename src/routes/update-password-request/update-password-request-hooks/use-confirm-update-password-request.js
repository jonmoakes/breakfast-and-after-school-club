import { useDispatch, useSelector } from "react-redux";
import { account } from "../../../utils/appwrite/appwrite-config";

import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { startLoader, stopLoader } from "../../../store/loader/loader.slice";
import { selectCurrentUser } from "../../../store/user/user.selector";

import {
  areYouSureMessage,
  checkEmailMessage,
  errorRequestUpdatePasswordLinkMessage,
  imSureMessage,
  localhostUpdatePasswordResultRoute,
  successMessage,
  updatePasswordRequestRoute,
} from "../../../strings/strings";

const useConfirmUpdatePasswordRequest = () => {
  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();

  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const { email } = currentUser;

  const confirmResult = () => {
    updatePasswordRequestSubmit();
  };

  const confirmUpdatePasswordRequest = () => {
    confirmSwal(areYouSureMessage, "", imSureMessage, confirmResult);
  };

  const updatePasswordRequestSubmit = async () => {
    dispatch(startLoader());
    try {
      if (import.meta.env.MODE === "development") {
        await account.createRecovery(email, localhostUpdatePasswordResultRoute);
      } else if (import.meta.env.MODE === "production") {
        await account.createRecovery(email, updatePasswordRequestRoute);
      }
      dispatch(stopLoader());
      fireSwal("success", successMessage, checkEmailMessage, 0, true, true);
    } catch (error) {
      dispatch(stopLoader());
      fireSwal(
        "error",
        errorRequestUpdatePasswordLinkMessage,
        `the error received was: ${error.message}`,
        0,
        true,
        false
      );
    }
  };

  return { confirmUpdatePasswordRequest };
};

export default useConfirmUpdatePasswordRequest;
