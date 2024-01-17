import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import {
  selectCurrentUser,
  selectEnvironmentVariables,
} from "../../../store/user/user.selector";
import {
  sendContactFormMessageAsync,
  selectContactFormDetails,
} from "../../../store/contact-form/contact-form.slice";

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
  const currentUser = useSelector(selectCurrentUser);
  const envVariables = useSelector(selectEnvironmentVariables);

  const { name, email, message } = contactFormDetails;
  const { appOwnerEmail } = envVariables;
  const currentUserEmail = currentUser ? currentUser.email : "";

  const dispatch = useDispatch();

  const confirmResult = () => {
    dispatch(
      sendContactFormMessageAsync({
        currentUserEmail,
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
