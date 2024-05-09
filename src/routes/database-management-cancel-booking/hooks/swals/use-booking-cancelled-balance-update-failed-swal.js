import useDatabaseManagementActions from "../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useFireSwal from "../../../../hooks/use-fire-swal";
import { bookingCancelledBalanceUpdateFailedMessage } from "../../../../strings/errors/errors-strings";

const useBookingCancelledBalanceUpdateFailedSwal = () => {
  const { fireSwal } = useFireSwal();
  const {
    dispatchResetDeleteDocumentResult,
    dispatchResetUpdateBalanceResult,
    dispatchResetUpdateBalanceError,
  } = useDatabaseManagementActions();

  const bookingCancelledBalanceUpdateFailedSwal = () => {
    fireSwal(
      "error",
      bookingCancelledBalanceUpdateFailedMessage,
      "",
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatchResetDeleteDocumentResult();
        dispatchResetUpdateBalanceResult();
        dispatchResetUpdateBalanceError();
      }
    });
  };

  return { bookingCancelledBalanceUpdateFailedSwal };
};

export default useBookingCancelledBalanceUpdateFailedSwal;
