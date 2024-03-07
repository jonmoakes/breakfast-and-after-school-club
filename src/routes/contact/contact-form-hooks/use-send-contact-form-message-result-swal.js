import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  resetContactFormState,
  selectContactFormSelectors,
} from "../../../store/contact-form/contact-form.slice";

import { emailResponseTimeMessage } from "../../../strings/infos/infos-strings";
import {
  errorReceivedMessage,
  errorSendingMessage,
} from "../../../strings/errors/errors-strings";
import { successMessage } from "../../../strings/successes/successes-strings";

const useSendContactFormMessageResultSwal = () => {
  const { fireSwal } = useFireSwal();

  const { responseStatus, contactFormError } = useSelector(
    selectContactFormSelectors
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!responseStatus && !contactFormError) return;
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
    } else if (contactFormError) {
      const error = contactFormError;
      fireSwal(
        "error",
        errorSendingMessage,
        errorReceivedMessage(error),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetContactFormState());
        }
      });
    }
  }, [dispatch, contactFormError, fireSwal, responseStatus]);
};

export default useSendContactFormMessageResultSwal;
