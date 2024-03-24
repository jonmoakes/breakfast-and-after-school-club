import { useDispatch } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useGetContactFormSelectors from "../../../hooks/get-selectors/use-get-contact-form-selectors";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import { sendContactFormMessageAsync } from "../../../store/contact-form/contact-form.thunks";

import { validateEmail } from "../../../functions/validate-email";

import {
  sureSendContactFormMessage,
  yesSendIt,
} from "../../../strings/confirms/confirms-strings";
import {
  missingEmailFieldsErrorMessage,
  invalidEmailErrorMessage,
} from "../../../strings/errors/errors-strings";

const useConfirmSendContactFormMessage = () => {
  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();
  const { name, email, message } = useGetContactFormSelectors();
  const { appOwnerEmail, currentUserEmailForContactForm } =
    useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const confirmResult = () => {
    dispatch(
      sendContactFormMessageAsync({
        currentUserEmailForContactForm,
        appOwnerEmail,
        name,
        email,
        message,
      })
    );
  };

  const confirmSendContactFormMessage = () => {
    if (!name || !email || !message) {
      fireSwal("error", missingEmailFieldsErrorMessage, "", 0, true, false);
      return;
    } else if (!validateEmail(email)) {
      fireSwal("error", invalidEmailErrorMessage, "", 0, true, false);
      return;
    } else {
      confirmSwal(sureSendContactFormMessage, "", yesSendIt, confirmResult);
    }
  };

  return { confirmSendContactFormMessage };
};

export default useConfirmSendContactFormMessage;
