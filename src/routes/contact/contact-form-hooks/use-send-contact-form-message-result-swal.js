import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  resetContactFormState,
  selectSendMessageResponseStatus,
  selectSendMessageError,
} from "../../../store/contact-form/contact-form.slice";

import {
  emailResponseTimeMessage,
  errorSendingMessage,
  successMessage,
} from "../../../strings/strings";

const useSendContactFormMessageResultSwal = () => {
  const { fireSwal } = useFireSwal();

  const responseStatus = useSelector(selectSendMessageResponseStatus);
  const error = useSelector(selectSendMessageError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!responseStatus && !error) return;
    if (responseStatus === 202) {
      fireSwal(
        "success",
        successMessage,
        emailResponseTimeMessage,
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetContactFormState());
        }
      });
    } else if (error) {
      fireSwal(
        "error",
        errorSendingMessage,
        `the error received was: ${error}. please try again.`,
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetContactFormState());
        }
      });
    }
  }, [dispatch, error, fireSwal, responseStatus]);
};

export default useSendContactFormMessageResultSwal;
