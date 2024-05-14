import useDatabaseManagementActions from "../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useGetDatabaseManagementSelectors from "../../../../hooks/get-selectors/use-get-database-management-selectors";
import useFireSwal from "../../../../hooks/use-fire-swal";
import {
  bookingManuallyCancelledFailedErrorMessage,
  errorReceivedMessageWithoutContactDetail,
} from "../../../../strings/errors/errors-strings";

const useCancelBookingFirstThunkFailedSwal = () => {
  const { updateBalanceError, updateSessionSpacesError, userOfAppChoice } =
    useGetDatabaseManagementSelectors();
  const {
    dispatchResetUpdateSessionSpacesError,
    dispatchResetUpdateSessionSpacesResult,
    dispatchResetUpdateBalanceResult,
    dispatchResetUpdateBalanceError,
  } = useDatabaseManagementActions();
  const { fireSwal } = useFireSwal();

  const cancelBookingFirstThunkFailedSwal = () => {
    const error = updateSessionSpacesError
      ? updateSessionSpacesError
      : updateBalanceError;
    fireSwal(
      "error",
      bookingManuallyCancelledFailedErrorMessage,
      errorReceivedMessageWithoutContactDetail(error),
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed && userOfAppChoice === "non user") {
        dispatchResetUpdateSessionSpacesError();
        dispatchResetUpdateSessionSpacesResult();
      } else if (isConfirmed && userOfAppChoice === "user") {
        dispatchResetUpdateBalanceResult();
        dispatchResetUpdateBalanceError();
      }
    });
  };

  return { cancelBookingFirstThunkFailedSwal };
};

export default useCancelBookingFirstThunkFailedSwal;
