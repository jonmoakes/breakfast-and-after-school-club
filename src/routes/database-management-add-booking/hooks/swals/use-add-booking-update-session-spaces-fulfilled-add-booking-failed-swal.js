import useDatabaseManagementActions from "../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useGetDatabaseManagementSelectors from "../../../../hooks/get-selectors/use-get-database-management-selectors";
import useFireSwal from "../../../../hooks/use-fire-swal";

import {
  errorReceivedMessageWithoutContactDetail,
  sessionSpacesUpdatedAddBookingFailedErrorMessage,
} from "../../../../strings/errors/errors-strings";

const useUpdateSessionSpacesFulfilledAddBookingFailedSwal = () => {
  const { addBookingError } = useGetDatabaseManagementSelectors();
  const {
    dispatchResetUpdateSessionSpacesResult,
    dispatchResetAddBookingResult,
    dispatchResetAddBookingError,
  } = useDatabaseManagementActions();
  const { fireSwal } = useFireSwal();

  const updateSessionSpacesFulfilledAddBookingFailedSwal = () => {
    const error = addBookingError;
    fireSwal(
      "error",
      sessionSpacesUpdatedAddBookingFailedErrorMessage,
      errorReceivedMessageWithoutContactDetail(error),
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatchResetUpdateSessionSpacesResult();
        dispatchResetAddBookingResult();
        dispatchResetAddBookingError();
      }
    });
  };

  return {
    updateSessionSpacesFulfilledAddBookingFailedSwal,
  };
};

export default useUpdateSessionSpacesFulfilledAddBookingFailedSwal;
