import useConfirmSwal from "../../../../hooks/use-confirm-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";
import useSendEmailConfirmation from "../use-send-email-confirmation";

import {
  bookAnotherSessionQuestion,
  bookingSuccessfulConfirmSendEmailMessage,
} from "../../../../strings/confirms/confirms-strings";
import {
  bookAnotherButtonText,
  sendEmailButtonText,
} from "../../../../strings/infos/infos-strings";
import { bookedSessionsUserRoute } from "../../../../strings/routes/routes-strings";

const useConfirmSessionBookedBookAnotherSession = () => {
  const { confirmSwal } = useConfirmSwal();
  const { sendEmailConfirmation } = useSendEmailConfirmation();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const confirmSessionBookedBookAnotherSession = () =>
    confirmSwal(
      bookingSuccessfulConfirmSendEmailMessage,
      "",
      sendEmailButtonText,
      () => sendEmailConfirmation(),
      () =>
        confirmSwal(
          bookAnotherSessionQuestion,
          "",
          bookAnotherButtonText,
          () => window.location.reload(),
          () => hamburgerHandlerNavigate(bookedSessionsUserRoute)
        )
    );

  return { confirmSessionBookedBookAnotherSession };
};

export default useConfirmSessionBookedBookAnotherSession;
