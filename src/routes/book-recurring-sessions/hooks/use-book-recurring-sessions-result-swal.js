import { useEffect } from "react";

import useGetBookRecurringSessionsSelectors from "../../../hooks/get-selectors/use-get-book-recurring-sessions-selectors";
import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useFireSwal from "../../../hooks/use-fire-swal";

import useReturnLogic from "./use-return-logic";
import useSessionsBookedBookMoreQuestion from "./swals/use-sessions-booked-book-more-question";
import useRecurringSessonsSessionSpacesErrorSwal from "./swals/use-recurring-sessions-session-spaces-error-swal";
import useRecurringSessionsUpdateBalanceErrorResetSessionSpacesSwal from "./swals/use-recurring-sessions-update-balance-error-reset-session-spaces-swal";

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
  const { fireSwal } = useFireSwal();

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
      fireSwal(
        "error",
        "error adding sessions to database",
        "",
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          // dispatchAddRecurringBookingsResult();
          // dispatchAddRecurringBookingsError();
          //send email to app owner here
          // sendAddBookingInfoErrorEmailThunk(
          //   date,
          //   sessionType,
          //   childrenSelectedForBooking,
          //   usersChildren
          // );
        }
      });
    }
  }, [
    addRecurringBookingsResult,
    fireSwal,
    noActionsFiredYet,
    recurringSessionsUpdateBalanceErrorResetSessionSpacesSwal,
    recurringSessonsSessionSpacesErrorSwal,
    sessionsBookedBookMoreQuestion,
    swalConfirmed,
    updateBalanceResult,
    updateSessionSpacesResult,
  ]);
};

export default useBookRecurringSessionsResultSwal;
