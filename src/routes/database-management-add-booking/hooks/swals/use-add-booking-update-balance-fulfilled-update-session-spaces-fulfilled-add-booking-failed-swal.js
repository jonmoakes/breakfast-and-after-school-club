import useDatabaseManagementActions from "../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useGetDatabaseManagementSelectors from "../../../../hooks/get-selectors/use-get-database-management-selectors";
import useFireSwal from "../../../../hooks/use-fire-swal";

import {
  balanceAddedSessionSpacesUpdatedAddBookingFailedErrorMessage,
  errorReceivedMessageWithoutContactDetail,
} from "../../../../strings/errors/errors-strings";

const useAddBookingUpdateBalanceFulfilledUpdateSessionSpacesFulfilledAddBookingFailedSwal =
  () => {
    const { addBookingError } = useGetDatabaseManagementSelectors();
    const {
      dispatchResetUpdateBalanceResult,
      dispatchResetUpdateSessionSpacesResult,
      dispatchResetAddBookingResult,
      dispatchResetAddBookingError,
    } = useDatabaseManagementActions();
    const { fireSwal } = useFireSwal();

    const addBookingUpdateBalanceFulfilledUpdateSessionSpacesFulfilledAddBookingFailedSwal =
      () => {
        const error = addBookingError;
        fireSwal(
          "error",
          balanceAddedSessionSpacesUpdatedAddBookingFailedErrorMessage,
          errorReceivedMessageWithoutContactDetail(error),
          0,
          true,
          false
        ).then((isConfirmed) => {
          if (isConfirmed) {
            dispatchResetUpdateBalanceResult();
            dispatchResetUpdateSessionSpacesResult();
            dispatchResetAddBookingResult();
            dispatchResetAddBookingError();
          }
        });
      };

    return {
      addBookingUpdateBalanceFulfilledUpdateSessionSpacesFulfilledAddBookingFailedSwal,
    };
  };

export default useAddBookingUpdateBalanceFulfilledUpdateSessionSpacesFulfilledAddBookingFailedSwal;
