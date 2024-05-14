import useDatabaseManagementActions from "../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useGetDatabaseManagementSelectors from "../../../../hooks/get-selectors/use-get-database-management-selectors";
import useFireSwal from "../../../../hooks/use-fire-swal";

import {
  balanceUpdatedSessionSpacesFailedWhenCancellingErrorMessage,
  errorReceivedMessageWithoutContactDetail,
} from "../../../../strings/errors/errors-strings";

const useCancelBookingUpdateBalanceFulfilledUpdateSessionSpacesFailedSwal =
  () => {
    const { updateSessionSpacesError } = useGetDatabaseManagementSelectors();
    const {
      dispatchResetUpdateSessionSpacesResult,
      dispatchResetUpdateBalanceResult,
      dispatchResetUpdateSessionSpacesError,
    } = useDatabaseManagementActions();
    const { fireSwal } = useFireSwal();

    const cancelBookingUpdateBalanceFulfilledUpdateSessionSpacesFailedSwal =
      () => {
        const error = updateSessionSpacesError;
        fireSwal(
          "error",
          balanceUpdatedSessionSpacesFailedWhenCancellingErrorMessage,
          errorReceivedMessageWithoutContactDetail(error),
          0,
          true,
          false
        ).then((isConfirmed) => {
          if (isConfirmed) {
            dispatchResetUpdateBalanceResult();
            dispatchResetUpdateSessionSpacesResult();
            dispatchResetUpdateSessionSpacesError();
          }
        });
      };

    return { cancelBookingUpdateBalanceFulfilledUpdateSessionSpacesFailedSwal };
  };

export default useCancelBookingUpdateBalanceFulfilledUpdateSessionSpacesFailedSwal;
