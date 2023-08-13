import { useDispatch, useSelector } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { selectCurrentUser } from "../../../store/user/user.selector";
import { updatePasswordRequestAsync } from "../../../store/update-password-request/update-password-request.slice";

import {
  sureSendUpdatePasswordLinkMessage,
  imSureMessage,
} from "../../../strings/strings";

const useConfirmUpdatePasswordRequest = () => {
  const { confirmSwal } = useConfirmSwal();

  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const { email } = currentUser;

  const confirmResult = () => {
    dispatch(updatePasswordRequestAsync({ email }));
  };

  const confirmUpdatePasswordRequest = () => {
    confirmSwal(
      sureSendUpdatePasswordLinkMessage,
      "",
      imSureMessage,
      confirmResult
    );
  };

  return { confirmUpdatePasswordRequest };
};

export default useConfirmUpdatePasswordRequest;
