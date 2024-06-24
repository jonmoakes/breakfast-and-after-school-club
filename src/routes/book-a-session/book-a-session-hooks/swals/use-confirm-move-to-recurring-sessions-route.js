import useConfirmSwal from "../../../../hooks/use-confirm-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import {
  confirmGoToRecurringBookingsRoute,
  imSureMessage,
} from "../../../../strings/confirms/confirms-strings";
import { bookRecurringSessionsRoute } from "../../../../strings/routes/routes-strings";

const useConfirmMoveToRecurringSessionsRoute = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { confirmSwal } = useConfirmSwal();

  const confirmMoveToRecurringSessionsRoute = () => {
    const confirmResult = () => {
      hamburgerHandlerNavigate(bookRecurringSessionsRoute);
    };
    confirmSwal(confirmGoToRecurringBookingsRoute, "", imSureMessage, () =>
      confirmResult()
    );
  };

  return { confirmMoveToRecurringSessionsRoute };
};

export default useConfirmMoveToRecurringSessionsRoute;
