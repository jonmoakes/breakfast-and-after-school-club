import useGetContactFormSelectors from "../../../hooks/get-selectors/use-get-contact-form-selectors";
import useSendContactFormMessageThunk from "../../../hooks/get-actions-and-thunks/contact-form-actions-and-thunks/use-send-contact-form-message-thunk";
import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import useShowInvalidEmailMessageSwal from "../../../hooks/use-show-invalid-email-message-swal";

import { validateEmail } from "../../../functions/validate-email";

import {
  sureSendContactFormMessage,
  yesSendIt,
} from "../../../strings/confirms/confirms-strings";
import { missingEmailFieldsErrorMessage } from "../../../strings/errors/errors-strings";

const useConfirmSendContactFormMessage = () => {
  const { name, email, message } = useGetContactFormSelectors();
  const { sendContactFormMessageThunk } = useSendContactFormMessageThunk();
  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();
  const { showInvalidEmailMessageSwal } = useShowInvalidEmailMessageSwal();

  const confirmResult = () => {
    sendContactFormMessageThunk();
  };

  const confirmSendContactFormMessage = () => {
    if (!name || !email || !message) {
      fireSwal("error", missingEmailFieldsErrorMessage, "", 0, true, false);
      return;
    } else if (!validateEmail(email)) {
      showInvalidEmailMessageSwal();
      return;
    } else {
      confirmSwal(sureSendContactFormMessage, "", yesSendIt, confirmResult);
    }
  };

  return { confirmSendContactFormMessage };
};

export default useConfirmSendContactFormMessage;
