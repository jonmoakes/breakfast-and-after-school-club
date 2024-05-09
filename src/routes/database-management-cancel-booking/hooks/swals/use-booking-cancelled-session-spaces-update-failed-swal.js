import useDatabaseManagementActions from "../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useFireSwal from "../../../../hooks/use-fire-swal";
import { bookingCancelledSessionSpacesFailedMessage } from "../../../../strings/errors/errors-strings";

const useBookingCancelledSessionSpacesUpdateFailedSwal = () => {
  const { fireSwal } = useFireSwal();
  const {
    dispatchResetDeleteDocumentResult,
    dispatchResetUpdateSessionSpacesResult,
    dispatchResetUpdateSessionSpacesError,
  } = useDatabaseManagementActions();

  const bookingCancelledSessionSpacesUpdateFailedSwal = () => {
    fireSwal(
      "error",
      bookingCancelledSessionSpacesFailedMessage,
      "",
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatchResetDeleteDocumentResult();
        dispatchResetUpdateSessionSpacesResult();
        dispatchResetUpdateSessionSpacesError();
      }
    });
  };

  return { bookingCancelledSessionSpacesUpdateFailedSwal };
};

export default useBookingCancelledSessionSpacesUpdateFailedSwal;
