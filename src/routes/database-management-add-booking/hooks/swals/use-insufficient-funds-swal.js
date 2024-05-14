import useDatabaseManagementActions from "../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useFireSwal from "../../../../hooks/use-fire-swal";
import { userHasInsufficentFundsErrorMessage } from "../../../../strings/errors/errors-strings";

const useInsufficientFundsSwal = () => {
  const { dispatchResetUpdateBalanceResult, dispatchResetUpdateBalanceError } =
    useDatabaseManagementActions();
  const { fireSwal } = useFireSwal();

  const insufficientFundsSwal = () => {
    fireSwal(
      "error",
      userHasInsufficentFundsErrorMessage,
      "",
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

  return { insufficientFundsSwal };
};

export default useInsufficientFundsSwal;
