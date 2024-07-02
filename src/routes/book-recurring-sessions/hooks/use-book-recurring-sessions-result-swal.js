import { useEffect } from "react";

import useGetBookRecurringSessionsSelectors from "../../../hooks/get-selectors/use-get-book-recurring-sessions-selectors";
import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";

import useReturnLogic from "./use-return-logic";
import useSessionsBookedBookMoreQuestion from "./swals/use-sessions-booked-book-more-question";
import useRecurringSessonsSessionSpacesErrorSwal from "./swals/use-recurring-sessions-session-spaces-error-swal";
import useRecurringSessionsUpdateBalanceErrorResetSessionSpacesSwal from "./swals/use-recurring-sessions-update-balance-error-reset-session-spaces-swal";
import useRecurringSessionsAddBookingInfoErrorSwal from "./swals/use-recurring-sessions-add-booking-info-error-swal";

const useBookRecurringSessionsResultSwal = () => {
  const { updateSessionSpacesResult, addRecurringBookingsResult } =
    useGetBookRecurringSessionsSelectors();
  const { updateBalanceResult } = useGetDatabaseManagementSelectors();
  const { noActionsFiredYet } = useReturnLogic();
  const { sessionsBookedBookMoreQuestion } =
    useSessionsBookedBookMoreQuestion();
  const { recurringSessonsSessionSpacesErrorSwal } =
    useRecurringSessonsSessionSpacesErrorSwal();
  const {
    recurringSessionsUpdateBalanceErrorResetSessionSpacesSwal,
    swalConfirmed,
  } = useRecurringSessionsUpdateBalanceErrorResetSessionSpacesSwal();
  const { recurringSessionsAddBookingInfoErrorSwal } =
    useRecurringSessionsAddBookingInfoErrorSwal();

  useEffect(() => {
    if (noActionsFiredYet() || swalConfirmed) return;

    if (
      updateSessionSpacesResult === "fulfilled" &&
      updateBalanceResult === "fulfilled" &&
      addRecurringBookingsResult === "fulfilled"
    ) {
      sessionsBookedBookMoreQuestion();
    } else if (updateSessionSpacesResult === "rejected") {
      recurringSessonsSessionSpacesErrorSwal();
    } else if (
      updateSessionSpacesResult === "fulfilled" &&
      updateBalanceResult === "rejected"
    ) {
      recurringSessionsUpdateBalanceErrorResetSessionSpacesSwal();
    } else if (
      updateSessionSpacesResult === "fulfilled" &&
      updateBalanceResult === "fulfilled" &&
      addRecurringBookingsResult === "rejected"
    ) {
      recurringSessionsAddBookingInfoErrorSwal();
    }
  }, [
    addRecurringBookingsResult,
    noActionsFiredYet,
    recurringSessionsAddBookingInfoErrorSwal,
    recurringSessionsUpdateBalanceErrorResetSessionSpacesSwal,
    recurringSessonsSessionSpacesErrorSwal,
    sessionsBookedBookMoreQuestion,
    swalConfirmed,
    updateBalanceResult,
    updateSessionSpacesResult,
  ]);
};

export default useBookRecurringSessionsResultSwal;
