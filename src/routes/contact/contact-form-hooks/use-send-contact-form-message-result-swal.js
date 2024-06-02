import { useEffect } from "react";

import useFireSwal from "../../../hooks/use-fire-swal";
import useGetContactFormSelectors from "../../../hooks/get-selectors/use-get-contact-form-selectors";
import useContactFormActions from "../../../hooks/get-actions-and-thunks/contact-form-actions-and-thunks/use-contact-form-actions";

import { emailResponseTimeMessage } from "../../../strings/infos/infos-strings";
import { errorSendingMessage } from "../../../strings/errors/errors-strings";
import { successMessage } from "../../../strings/successes/successes-strings";

const useSendContactFormMessageResultSwal = () => {
  const { fireSwal } = useFireSwal();
  const { responseStatus, contactFormError } = useGetContactFormSelectors();
  const { dispatchResetContactFormState } = useContactFormActions();

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
          dispatchResetContactFormState();
        }
      });
    } else if (contactFormError) {
      const error = contactFormError;
      fireSwal("error", errorSendingMessage(error), "", 0, true, false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            dispatchResetContactFormState();
          }
        }
      );
    }
  }, [
    dispatchResetContactFormState,
    contactFormError,
    fireSwal,
    responseStatus,
  ]);
};

export default useSendContactFormMessageResultSwal;
