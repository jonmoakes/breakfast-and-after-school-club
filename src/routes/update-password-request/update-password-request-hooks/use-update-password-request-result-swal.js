import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  selectUpdatePasswordRequestResult,
  selectUpdatePasswordRequestError,
} from "../../../store/update-password-request/update-password-request.selector";
import {
  resetError,
  resetUpdatePasswordRequestState,
} from "../../../store/update-password-request/update-password-request.slice";

import {
  checkEmailMessage,
  errorRequestUpdatePasswordLinkMessage,
  successMessage,
} from "../../../strings/strings";

const useUpdatePasswordRequestResultSwal = () => {
  const { fireSwal } = useFireSwal();

  const result = useSelector(selectUpdatePasswordRequestResult);
  const error = useSelector(selectUpdatePasswordRequestError);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!result && !error) return;

    if (result === "succeeded") {
      fireSwal(
        "success",
        successMessage,
        checkEmailMessage,
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetUpdatePasswordRequestState());
        }
      });
    } else if (result === "failure" && error) {
      fireSwal(
        "error",
        errorRequestUpdatePasswordLinkMessage,
        `the error received was: ${error}`,
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetError());
        }
      });
    }
  }, [result, error, fireSwal, dispatch]);
};

export default useUpdatePasswordRequestResultSwal;
