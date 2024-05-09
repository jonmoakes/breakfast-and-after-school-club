import useDatabaseManagementActions from "../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useGetDatabaseManagementSelectors from "../../../../hooks/get-selectors/use-get-database-management-selectors";
import useFireSwal from "../../../../hooks/use-fire-swal";
import {
  bookingCancelledBalanceUpdatedSessionSpacesFailedMessage,
  errorReceivedMessageWithoutContactDetail,
} from "../../../../strings/errors/errors-strings";

const useBookingCancelledBalanceUpdatedSessionSpacesFailedSwal = () => {
  const { fireSwal } = useFireSwal();
  const {
    dispatchResetDeleteDocumentResult,
    dispatchResetUpdateBalanceResult,
    dispatchResetUpdateSessionSpacesResult,
    dispatchResetUpdateSessionSpacesError,
  } = useDatabaseManagementActions();
  const { updateSessionSpacesError } = useGetDatabaseManagementSelectors();

  const bookingCancelledBalanceUpdatedSessionSpacesFailedSwal = () => {
    const error = updateSessionSpacesError;
    fireSwal(
      "error",
      bookingCancelledBalanceUpdatedSessionSpacesFailedMessage,
      errorReceivedMessageWithoutContactDetail(error),
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatchResetDeleteDocumentResult();
        dispatchResetUpdateBalanceResult();
        dispatchResetUpdateSessionSpacesResult();
        dispatchResetUpdateSessionSpacesError();
      }
    });
  };

  return { bookingCancelledBalanceUpdatedSessionSpacesFailedSwal };
};

export default useBookingCancelledBalanceUpdatedSessionSpacesFailedSwal;
