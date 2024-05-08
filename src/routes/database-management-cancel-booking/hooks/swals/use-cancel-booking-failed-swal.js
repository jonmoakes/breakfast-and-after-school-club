import useDatabaseManagementActions from "../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useGetDatabaseManagementSelectors from "../../../../hooks/get-selectors/use-get-database-management-selectors";
import useFireSwal from "../../../../hooks/use-fire-swal";

import {
  errorCancellingBookingMessage,
  errorReceivedMessage,
} from "../../../../strings/errors/errors-strings";

const useCancelBookingFailedSwal = () => {
  const { deleteDocumentError } = useGetDatabaseManagementSelectors();
  const {
    dispatchResetDeleteDocumentResult,
    dispatchResetDeleteDocumentError,
  } = useDatabaseManagementActions();

  const { fireSwal } = useFireSwal();

  const cancelBookingFailedSwal = () => {
    const error = deleteDocumentError;
    fireSwal(
      "error",
      errorCancellingBookingMessage,
      errorReceivedMessage(error),
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatchResetDeleteDocumentResult();
        dispatchResetDeleteDocumentError();
      }
    });
  };

  return { cancelBookingFailedSwal };
};

export default useCancelBookingFailedSwal;
