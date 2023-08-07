import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  selectMagicUrlRequestResult,
  selectMagicUrlRequestError,
} from "../../../store/magic-url-request/magic-url-request.selector";
import {
  clearMagicUrlRequestResult,
  clearMagicUrlResultError,
} from "../../../store/magic-url-request/magic-url-request.slice";

import {
  checkEmailMessage,
  errorRequestingMagicUrl,
  successMessage,
} from "../../../strings/strings";

const useMagicUrlRequestSwal = () => {
  const { fireSwal } = useFireSwal();

  const requestResult = useSelector(selectMagicUrlRequestResult);
  const error = useSelector(selectMagicUrlRequestError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!error && !requestResult) return;

    if (requestResult) {
      fireSwal(
        "success",
        successMessage,
        checkEmailMessage,
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(clearMagicUrlRequestResult());
        }
      });
    } else if (error) {
      fireSwal("error", errorRequestingMagicUrl, error, 0, true, false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            dispatch(clearMagicUrlResultError());
          }
        }
      );
    }
  }, [dispatch, error, fireSwal, requestResult]);
};

export default useMagicUrlRequestSwal;
