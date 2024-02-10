import { useSelector } from "react-redux";

import useIsOnline from "../../../hooks/use-is-online";
import useConfirmSendContactFormMessage from "../contact-form-hooks/use-confirm-send-contact-form-message";

import { selectContactFormSelectors } from "../../../store/contact-form/contact-form.slice";

import NetworkError from "../../../components/errors/network-error.component";

import {
  DisabledButton,
  YellowGreenButton,
} from "../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const SendMessageButton = () => {
  const { isOnline } = useIsOnline();
  const { confirmSendContactFormMessage } = useConfirmSendContactFormMessage();

  const { contactFormIsLoading } = useSelector(selectContactFormSelectors);

  return (
    <>
      <BlackHr />

      {!isOnline ? (
        <NetworkError />
      ) : isOnline && !contactFormIsLoading ? (
        <YellowGreenButton
          type="button"
          onClick={confirmSendContactFormMessage}
        >
          Send Message
        </YellowGreenButton>
      ) : (
        isOnline &&
        contactFormIsLoading && (
          <DisabledButton className="disabled">please wait...</DisabledButton>
        )
      )}
    </>
  );
};

export default SendMessageButton;
