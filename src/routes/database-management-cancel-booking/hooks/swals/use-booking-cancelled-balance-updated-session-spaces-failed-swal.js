import useDatabaseManagementActions from "../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useFireSwal from "../../../../hooks/use-fire-swal";
import { bookingCancelledBalanceUpdatedSessionSpacesFailedMessage } from "../../../../strings/errors/errors-strings";

const useBookingCancelledBalanceUpdatedSessionSpacesFailedSwal = () => {
  const { fireSwal } = useFireSwal();
  const {
    dispatchResetUpdateSessionSpacesResult,
    dispatchResetUpdateSessionSpacesError,
  } = useDatabaseManagementActions();

  const bookingCancelledBalanceUpdatedSessionSpacesFailedSwal = () => {
    fireSwal(
      "error",
      bookingCancelledBalanceUpdatedSessionSpacesFailedMessage,
      "",
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatchResetUpdateSessionSpacesResult();
        dispatchResetUpdateSessionSpacesError();
      }
    });
  };

  return { bookingCancelledBalanceUpdatedSessionSpacesFailedSwal };
};

export default useBookingCancelledBalanceUpdatedSessionSpacesFailedSwal;
