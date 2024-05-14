import useDatabaseManagementActions from "../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useGetDatabaseManagementSelectors from "../../../../hooks/get-selectors/use-get-database-management-selectors";
import useFireSwal from "../../../../hooks/use-fire-swal";

import {
  balanceUpdatedSessionSpacesFailedErrorMessage,
  errorReceivedMessageWithoutContactDetail,
} from "../../../../strings/errors/errors-strings";

const useAddBookingUpdateBalanceFulfilledUpdateSessionSpacesFailedSwal = () => {
  const { updateSessionSpacesError } = useGetDatabaseManagementSelectors();
  const {
    dispatchResetUpdateBalanceResult,
    dispatchResetUpdateSessionSpacesError,
    dispatchResetUpdateSessionSpacesResult,
  } = useDatabaseManagementActions();
  const { fireSwal } = useFireSwal();

  const addBookingUpdateBalanceFulfilledUpdateSessionSpacesFailedSwal = () => {
    const error = updateSessionSpacesError;
    fireSwal(
      "error",
      balanceUpdatedSessionSpacesFailedErrorMessage,
      errorReceivedMessageWithoutContactDetail(error),
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatchResetUpdateBalanceResult();
        dispatchResetUpdateSessionSpacesError();
        dispatchResetUpdateSessionSpacesResult();
      }
    });
  };

  return { addBookingUpdateBalanceFulfilledUpdateSessionSpacesFailedSwal };
};

export default useAddBookingUpdateBalanceFulfilledUpdateSessionSpacesFailedSwal;
