import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { sendContactFormMessageAsync } from "../../../store/contact-form/contact-form.slice";
import { selectContactFormDetails } from "../../../store/contact-form/contact-form.selector";

import { validateEmail } from "../../../functions/validate-email";

import {
  missingEmailFieldsErrorMessage,
  invalidEmailErrorMessage,
  sureSendContactFormMessage,
  yesSendIt,
} from "../../../strings/strings";

const useConfirmSendContactFormMessage = () => {
  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();

  const contactFormDetails = useSelector(selectContactFormDetails);
  const dispatch = useDispatch();
  const { name, email, message } = contactFormDetails;

  const confirmResult = () => {
    dispatch(sendContactFormMessageAsync({ name, email, message }));
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
