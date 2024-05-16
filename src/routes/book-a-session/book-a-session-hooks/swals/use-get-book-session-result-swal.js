import { useEffect } from "react";

import useGetCurrentUserSelectors from "../../../../hooks/get-selectors/use-get-current-user-selectors";
import useGetDatabaseManagmentSelectors from "../../../../hooks/get-selectors/use-get-database-management-selectors";
import useReturnLogic from "../logic/use-return-logic";
import useSuccessSwal from "./use-success-swal";
import useUpdateBalanceErrorResetSessionDocSwal from "./use-update-balance-error-reset-session-doc-swal";
import useAddSessionBookingInfoErrorSwal from "./use-add-session-booking-info-error-swal";
import useSuccessfulBookingButFailedBalanceFetchSwal from "./use-successful-booking-but-failed-balance-fetch-swal";
import useUpdateSessionSpacesErrorSwal from "./use-update-session-spaces-error-swal";

const useGetBookSessionResultSwal = () => {
  const { noActionsFiredYet } = useReturnLogic();
  const { successSwal } = useSuccessSwal();
  const { updateSessionSpacesErrorSwal } = useUpdateSessionSpacesErrorSwal();
  const { swalConfirmed, updateBalanceErrorResetSessionDocSwal } =
    useUpdateBalanceErrorResetSessionDocSwal();
  const { addSessionBookingInfoErrorSwal } =
    useAddSessionBookingInfoErrorSwal();
  const { successfulBookingButFailedBalanceFetchSwal } =
    useSuccessfulBookingButFailedBalanceFetchSwal();
  const { currentUserWalletBalanceResult } = useGetCurrentUserSelectors();
  const { updateBalanceResult, updateSessionSpacesResult, addBookingResult } =
    useGetDatabaseManagmentSelectors();

  useEffect(() => {
    if (noActionsFiredYet() || swalConfirmed) return;
    if (
      updateSessionSpacesResult === "fulfilled" &&
      updateBalanceResult === "fulfilled" &&
      addBookingResult === "fulfilled" &&
      currentUserWalletBalanceResult === "success"
    ) {
      successSwal();
    } else if (updateSessionSpacesResult === "rejected") {
      updateSessionSpacesErrorSwal();
    } else if (
      updateSessionSpacesResult === "fulfilled" &&
      updateBalanceResult === "rejected"
    ) {
      updateBalanceErrorResetSessionDocSwal();
    } else if (
      updateSessionSpacesResult === "fulfilled" &&
      updateBalanceResult === "fulfilled" &&
      addBookingResult === "rejected"
    ) {
      addSessionBookingInfoErrorSwal();
    } else if (
      updateSessionSpacesResult === "fulfilled" &&
      updateBalanceResult === "fulfilled" &&
      addBookingResult === "fulfilled" &&
      currentUserWalletBalanceResult === "rejected"
    ) {
      successfulBookingButFailedBalanceFetchSwal();
    }
  }, [
    swalConfirmed,
    updateBalanceResult,
    updateSessionSpacesResult,
    addBookingResult,
    currentUserWalletBalanceResult,
    noActionsFiredYet,
    successSwal,
    updateSessionSpacesErrorSwal,
    updateBalanceErrorResetSessionDocSwal,
    addSessionBookingInfoErrorSwal,
    successfulBookingButFailedBalanceFetchSwal,
  ]);
};

export default useGetBookSessionResultSwal;
