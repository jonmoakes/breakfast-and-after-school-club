import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import useFireSwal from "../../../hooks/use-fire-swal";

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
} from "../../../strings/strings";

const useSendEmail = () => {
  const { fireSwal } = useFireSwal();

  const contactFormDetails = useSelector(selectContactFormDetails);
  const dispatch = useDispatch();
  const { name, email, message } = contactFormDetails;

  const sendEmail = async () => {
    if (!name || !email || !message) {
      fireSwal(
        "error",
        errorSendingMessage,
        missingEmailFieldsErrorMessage,
        0,
        true,
        false
      );
      return;
    } else if (!validateEmail(email)) {
      fireSwal(
        "error",
        errorSendingMessage,
        invalidEmailErrorMessage,
        0,
        true,
        false
      );
      return;
    }

    dispatch(startLoader());
    await axios
      .post("/.netlify/functions/send-contact-form-message", {
        message: emailToSend(
          capitalizeString(name),
          email,
          capitalizeString(message)
        ),
      })
      .then(
        (response) => {
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
        },
        (error) => {
          dispatch(stopLoader());
          fireSwal(
            "error",
            errorSendingMessage,
            `error message: ${error.message} / ${error.code}`,
            0,
            true,
            false
          );
        }
      );
  };

  return { sendEmail };
};

export default useSendEmail;
