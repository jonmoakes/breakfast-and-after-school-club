import { useSelector } from "react-redux";

import useConfirmSendContactFormMessage from "../contact-form-hooks/use-confirm-send-contact-form-message";

import { selectSendMessageIsLoading } from "../../../store/contact-form/contact-form.selector";

import NetworkError from "../../../components/errors/network-error.component";

import {
  DisabledButton,
  YellowGreenButton,
} from "../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import useIsOnline from "../../../hooks/use-is-online";

const SendMessageButton = () => {
  const { isOnline } = useIsOnline();
  const { confirmSendContactFormMessage } = useConfirmSendContactFormMessage();

  const isLoading = useSelector(selectSendMessageIsLoading);

  return (
    <>
      <BlackHr />

      {!isOnline ? (
        <NetworkError />
      ) : isOnline && !isLoading ? (
        <YellowGreenButton
          type="button"
          onClick={confirmSendContactFormMessage}
        >
          Send Message
        </YellowGreenButton>
      ) : (
        isOnline && isLoading && <DisabledButton>please wait...</DisabledButton>
      )}
    </>
  );
};

export default SendMessageButton;
