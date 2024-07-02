import { useState } from "react";
import useFireSwal from "../../../../hooks/use-fire-swal";
import useGetBookRecurringSessionsSelectors from "../../../../hooks/get-selectors/use-get-book-recurring-sessions-selectors";
import useResetRecurringSessionSpacesThunk from "../../../../hooks/get-actions-and-thunks/book-recurring-sessions-actions-thunks/use-reset-recurring-sessions-spaces";
import useBookRecurringSessionsVariables from "../use-book-recurring-sessions-variables";

const useRecurringSessionsUpdateBalanceErrorResetSessionSpacesSwal = () => {
  const { updateSessionSpacesError } = useGetBookRecurringSessionsSelectors();
  const { numberOfChildrenInBooking, sessionChoice, bookingsToAdd } =
    useBookRecurringSessionsVariables();
  const { resetRecurringSessionSpacesThunk } =
    useResetRecurringSessionSpacesThunk();
  const { fireSwal } = useFireSwal();
  const [swalConfirmed, setSwalConfirmed] = useState(false);

  const recurringSessionsUpdateBalanceErrorResetSessionSpacesSwal = () => {
    fireSwal(
      "error",
      "error making booking. please tap ok to continue.",
      updateSessionSpacesError,
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        setSwalConfirmed(true);
        resetRecurringSessionSpacesThunk(
          bookingsToAdd,
          sessionChoice,
          numberOfChildrenInBooking
        );
      }
    });
  };

  return {
    recurringSessionsUpdateBalanceErrorResetSessionSpacesSwal,
    swalConfirmed,
  };
};

export default useRecurringSessionsUpdateBalanceErrorResetSessionSpacesSwal;
