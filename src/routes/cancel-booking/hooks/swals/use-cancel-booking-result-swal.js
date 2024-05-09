import { useEffect } from "react";

import useGetCurrentUserSelectors from "../../../../hooks/get-selectors/use-get-current-user-selectors";
import useGetUserBookingToDeleteSelectors from "../../../../hooks/get-selectors/use-get-user-booking-to-delete-selectors";
import useGetDatabaseManagementSelectors from "../../../../hooks/get-selectors/use-get-database-management-selectors";
import useReturnLogic from "../use-return-logic";
import useSuccessSwal from "./use-success-swal";
import useUpdateBookingsResultErrorSwal from "./use-update-bookings-result-error-swal";
import useUpdateBalanceErrorSwal from "./use-update-balance-error-swal";
import useUpdateSessionSpacesAndBalanceErrorSwal from "./use-update-session-spaces-and-balance-error-swal";
import useBookingCancelledButFailedBalanceFetchSwal from "./use-booking-cancelled-but-failed-balance-fetch-swal";

const useCancelBookingResultSwal = () => {
  const { currentUserWalletBalanceResult } = useGetCurrentUserSelectors();
  const { updateBookingsResult, updateBalanceResult } =
    useGetUserBookingToDeleteSelectors();
  const { updateSessionSpacesResult } = useGetDatabaseManagementSelectors();
  const { noActionsFiredYet } = useReturnLogic();
  const { successSwal } = useSuccessSwal();
  const { updateBookingsResultErrorSwal } = useUpdateBookingsResultErrorSwal();
  const { updateBalanceErrorSwal } = useUpdateBalanceErrorSwal();
  const { updateSessionSpacesAndBalanceErrorSwal } =
    useUpdateSessionSpacesAndBalanceErrorSwal();
  const { bookingCancelledButFailedBalanceFetchSwal } =
    useBookingCancelledButFailedBalanceFetchSwal();

  useEffect(() => {
    if (noActionsFiredYet()) return;
    if (
      updateBookingsResult === "fulfilled" &&
      updateSessionSpacesResult === "fulfilled" &&
      updateBalanceResult === "fulfilled" &&
      currentUserWalletBalanceResult === "success"
    ) {
      successSwal();
    } else if (
      updateBookingsResult === "fulfilled" &&
      updateSessionSpacesResult === "fulfilled" &&
      updateBalanceResult === "fulfilled" &&
      currentUserWalletBalanceResult === "rejected"
    ) {
      bookingCancelledButFailedBalanceFetchSwal();
    } else if (updateBookingsResult === "rejected") {
      updateBookingsResultErrorSwal();
    } else if (
      updateBookingsResult === "fulfilled" &&
      updateSessionSpacesResult === "rejected"
    ) {
      updateSessionSpacesAndBalanceErrorSwal();
    } else if (
      updateBookingsResult === "fulfilled" &&
      updateSessionSpacesResult === "fulfilled" &&
      updateBalanceResult === "rejected"
    ) {
      updateBalanceErrorSwal();
    }
  }, [
    noActionsFiredYet,
    updateBalanceResult,
    updateBookingsResult,
    successSwal,
    updateBookingsResultErrorSwal,
    updateBalanceErrorSwal,
    updateSessionSpacesResult,
    updateSessionSpacesAndBalanceErrorSwal,
    currentUserWalletBalanceResult,
    bookingCancelledButFailedBalanceFetchSwal,
  ]);
};

export default useCancelBookingResultSwal;
