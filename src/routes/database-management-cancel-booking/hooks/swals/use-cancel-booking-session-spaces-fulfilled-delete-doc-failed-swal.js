import useDatabaseManagementActions from "../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useGetDatabaseManagementSelectors from "../../../../hooks/get-selectors/use-get-database-management-selectors";
import useFireSwal from "../../../../hooks/use-fire-swal";

import {
  errorReceivedMessageWithoutContactDetail,
  sessionSpacesUpdatedDeleteDocumentFailedErrorMessage,
} from "../../../../strings/errors/errors-strings";

const useCancelBookingSessionSpacesFulfilledDeleteDocFailedSwal = () => {
  const { deleteDocumentError } = useGetDatabaseManagementSelectors();
  const {
    dispatchResetDeleteDocumentResult,
    dispatchResetDeleteDocumentError,
    dispatchResetUpdateSessionSpacesResult,
  } = useDatabaseManagementActions();
  const { fireSwal } = useFireSwal();

  const cancelBookingSessionSpacesFulfilledDeleteDocFailedSwal = () => {
    const error = deleteDocumentError;
    fireSwal(
      "error",
      sessionSpacesUpdatedDeleteDocumentFailedErrorMessage,
      errorReceivedMessageWithoutContactDetail(error),
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatchResetUpdateSessionSpacesResult();
        dispatchResetDeleteDocumentResult();
        dispatchResetDeleteDocumentError();
      }
    });
  };

  return { cancelBookingSessionSpacesFulfilledDeleteDocFailedSwal };
};

export default useCancelBookingSessionSpacesFulfilledDeleteDocFailedSwal;
