import useConfirmSwal from "../../../../hooks/use-confirm-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";
import useSendRecurringBookingsEmailConfirmation from "../use-send-recurring-bookings-email-confirmation";

import {
  recurringBookingsBookMoreSessionsQuestion,
  recurringBookingsSuccessfulConfirmSendEmailMessage,
} from "../../../../strings/confirms/confirms-strings";
import {
  bookMoreButtonText,
  sendEmailButtonText,
} from "../../../../strings/infos/infos-strings";
import { bookedSessionsUserRoute } from "../../../../strings/routes/routes-strings";

const useSessionsBookedBookMoreQuestion = () => {
  const { confirmSwal } = useConfirmSwal();
  const { sendRecurringBookingsEmailConfirmation } =
    useSendRecurringBookingsEmailConfirmation();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const sessionsBookedBookMoreQuestion = () =>
    confirmSwal(
      recurringBookingsSuccessfulConfirmSendEmailMessage,
      "",
      sendEmailButtonText,
      () => sendRecurringBookingsEmailConfirmation(),
      () =>
        confirmSwal(
          recurringBookingsBookMoreSessionsQuestion,
          "",
          bookMoreButtonText,
          () => window.location.reload(),
          () => hamburgerHandlerNavigate(bookedSessionsUserRoute)
        )
    );

  return { sessionsBookedBookMoreQuestion };
};

export default useSessionsBookedBookMoreQuestion;
