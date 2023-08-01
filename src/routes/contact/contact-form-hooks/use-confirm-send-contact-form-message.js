import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { startLoader, stopLoader } from "../../../store/loader/loader.slice";
import { resetContactFormFields } from "../../../store/contact-form/contact-form.slice";
import { selectContactFormDetails } from "../../../store/contact-form/contact-form.selector";

import { emailToSend } from "./email-to-send";

import { capitalizeString } from "../../../functions/capitalize-string";
import { validateEmail } from "../../../functions/validate-email";

import {
  errorSendingMessage,
  missingEmailFieldsErrorMessage,
  invalidEmailErrorMessage,
  successMessage,
  emailResponseTimeMessage,
  sureSendContactFormMessage,
  yesSendIt,
} from "../../../strings/strings";

const useConfirmSendContactFormMessage = () => {
  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();

  const contactFormDetails = useSelector(selectContactFormDetails);
  const dispatch = useDispatch();
  const { name, email, message } = contactFormDetails;

  const confirmResult = async () => {
    dispatch(startLoader());

    try {
      const response = await axios.post(
        "/.netlify/functions/send-contact-form-message",
        {
          message: emailToSend(
            capitalizeString(name),
            email,
            capitalizeString(message)
          ),
        }
      );
      dispatch(stopLoader());
      if (response.status === 202) {
        fireSwal(
          "success",
          successMessage,
          emailResponseTimeMessage,
          0,
          true,
          false
        );
        document.getElementById("contact-form").reset();
        dispatch(resetContactFormFields());
      }
    } catch (error) {
      dispatch(stopLoader());
      fireSwal(
        "error",
        errorSendingMessage,
        `the error received was: ${error.message}. please try again.`,
        0,
        true,
        false
      );
    }
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
