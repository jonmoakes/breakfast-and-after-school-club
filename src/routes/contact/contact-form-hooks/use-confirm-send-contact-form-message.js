import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { selectCurrentUserSelectors } from "../../../store/user/user.slice";
import { selectContactFormSelectors } from "../../../store/contact-form/contact-form.slice";
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

  const { contactFormDetails } = useSelector(selectContactFormSelectors);

  const { currentUser, currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );

  const { name, email, message } = contactFormDetails;
  const { appOwnerEmail } = currentUserEnvironmentVariables;
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
