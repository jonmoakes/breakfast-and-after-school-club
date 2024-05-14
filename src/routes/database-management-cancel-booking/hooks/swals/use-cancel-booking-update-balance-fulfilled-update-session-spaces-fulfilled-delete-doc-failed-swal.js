import useDatabaseManagementActions from "../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useGetDatabaseManagementSelectors from "../../../../hooks/get-selectors/use-get-database-management-selectors";
import useFireSwal from "../../../../hooks/use-fire-swal";

import {
  balanceUpdatedSessionSpacesUpdatedDeleteDocFailedWhenCancellingErrorMessage,
  errorReceivedMessageWithoutContactDetail,
} from "../../../../strings/errors/errors-strings";

const useCancelBookingUpdateBalanceFulfilledUpdateSessionSpacesFulfilledDeleteDocFailedSwal =
  () => {
    const { deleteDocumentError } = useGetDatabaseManagementSelectors();
    const {
      dispatchResetUpdateSessionSpacesResult,
      dispatchResetUpdateBalanceResult,
      dispatchResetDeleteDocumentResult,
      dispatchResetDeleteDocumentError,
    } = useDatabaseManagementActions();
    const { fireSwal } = useFireSwal();

    const cancelBookingUpdateBalanceFulfilledUpdateSessionSpacesFulfilledDeleteDocFailedSwal =
      () => {
        const error = deleteDocumentError;
        fireSwal(
          "error",
          balanceUpdatedSessionSpacesUpdatedDeleteDocFailedWhenCancellingErrorMessage,
          errorReceivedMessageWithoutContactDetail(error),
          0,
          true,
          false
        ).then((isConfirmed) => {
          if (isConfirmed) {
            dispatchResetUpdateBalanceResult();
            dispatchResetUpdateSessionSpacesResult();
            dispatchResetDeleteDocumentResult();
            dispatchResetDeleteDocumentError();
          }
        });
      };

    return {
      cancelBookingUpdateBalanceFulfilledUpdateSessionSpacesFulfilledDeleteDocFailedSwal,
    };
  };

export default useCancelBookingUpdateBalanceFulfilledUpdateSessionSpacesFulfilledDeleteDocFailedSwal;
