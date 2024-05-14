import useDatabaseManagementActions from "../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useGetDatabaseManagementSelectors from "../../../../hooks/get-selectors/use-get-database-management-selectors";
import useFireSwal from "../../../../hooks/use-fire-swal";

import {
  bookingManuallyAddedFailedErrorMessage,
  errorReceivedMessageWithoutContactDetail,
} from "../../../../strings/errors/errors-strings";

const useUpdateSessionSpacesOrAddBookingFailedSwal = () => {
  const { addBookingError, updateSessionSpacesError, errorId } =
    useGetDatabaseManagementSelectors();
  const {
    dispatchResetUpdateSessionSpacesResult,
    dispatchResetUpdateSessionSpacesError,
    dispatchResetAddBookingResult,
    dispatchResetAddBookingError,
  } = useDatabaseManagementActions();
  const { fireSwal } = useFireSwal();

  const updateSessionSpacesOrAddBookingFailedSwal = () => {
    const error = addBookingError ? addBookingError : updateSessionSpacesError;
    fireSwal(
      "error",
      bookingManuallyAddedFailedErrorMessage,
      errorReceivedMessageWithoutContactDetail(error),
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed && !errorId) {
        dispatchResetUpdateSessionSpacesResult();
        dispatchResetUpdateSessionSpacesError();
      } else if (isConfirmed && errorId === "2") {
        dispatchResetAddBookingResult();
        dispatchResetAddBookingError();
      }
    });
  };

  return {
    updateSessionSpacesOrAddBookingFailedSwal,
  };
};

export default useUpdateSessionSpacesOrAddBookingFailedSwal;
