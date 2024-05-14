import useDatabaseManagementActions from "../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useGetDatabaseManagementSelectors from "../../../../hooks/get-selectors/use-get-database-management-selectors";
import useFireSwal from "../../../../hooks/use-fire-swal";

import {
  balanceUpdateFailedErrorMessage,
  errorReceivedMessageWithoutContactDetail,
} from "../../../../strings/errors/errors-strings";

const useAddBookingUpdateBalanceFailedSwal = () => {
  const { updateBalanceError } = useGetDatabaseManagementSelectors();

  const { dispatchResetUpdateBalanceResult, dispatchResetUpdateBalanceError } =
    useDatabaseManagementActions();
  const { fireSwal } = useFireSwal();

  const addBookingUpdateBalanceFailedSwal = () => {
    const error = updateBalanceError;
    fireSwal(
      "error",
      balanceUpdateFailedErrorMessage,
      errorReceivedMessageWithoutContactDetail(error),
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatchResetUpdateBalanceResult();
        dispatchResetUpdateBalanceError();
      }
    });
  };

  return { addBookingUpdateBalanceFailedSwal };
};

export default useAddBookingUpdateBalanceFailedSwal;
