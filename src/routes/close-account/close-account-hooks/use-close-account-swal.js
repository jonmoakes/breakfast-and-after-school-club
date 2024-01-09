import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  selectCloseAccountSuccessMessage,
  selectCloseAccountError,
} from "../../../store/close-account/close-account.selector";
import {
  resetErrorMessage,
  resetSuccessMessage,
} from "../../../store/close-account/close-account.slice";

import {
  accountRoute,
  errorSendingAccountClosureRequest,
  receiveEmailWhenCompleteMessage,
} from "../../../strings/strings";

const useCloseAccountSwal = () => {
  const { fireSwal } = useFireSwal();

  const closeAccountSuccessMessage = useSelector(
    selectCloseAccountSuccessMessage
  );
  const closeAccountErrorMessage = useSelector(selectCloseAccountError);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (closeAccountSuccessMessage) {
      fireSwal(
        "success",
        closeAccountSuccessMessage,
        receiveEmailWhenCompleteMessage,
        0,
        true,
        false
      );
      navigate(accountRoute);
    } else if (closeAccountErrorMessage) {
      fireSwal(
        "error",
        errorSendingAccountClosureRequest,
        `the error received was: '${closeAccountErrorMessage}'.please try again`,
        0,
        true,
        false
      );
      navigate(accountRoute);
    }

    return () => {
      if (!closeAccountSuccessMessage && !closeAccountErrorMessage) return;
      if (closeAccountSuccessMessage) {
        dispatch(resetSuccessMessage());
      } else if (closeAccountErrorMessage) {
        dispatch(resetErrorMessage());
      }
    };
  }, [
    closeAccountSuccessMessage,
    closeAccountErrorMessage,
    fireSwal,
    dispatch,
    navigate,
  ]);
};

export default useCloseAccountSwal;
