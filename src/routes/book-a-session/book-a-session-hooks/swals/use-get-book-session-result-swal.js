import { useEffect } from "react";

import useReturnLogic from "../logic/use-return-logic";
import useSuccessSwal from "./use-success-swal";
import useUpdateSessionDocErrorSwal from "./use-update-session-doc-error-swal";
import useUpdateBalanceErrorResetSessionDocSwal from "./use-update-balance-error-reset-session-doc-swal";
import useAddSessionBookingInfoErrorSwal from "./use-add-session-booking-info-error-swal";
import useSuccessfulBookingButFailedBalanceFetchSwal from "./use-successful-booking-but-failed-balance-fetch-swal";
import useGetCurrentUserSelectors from "../../../../hooks/get-selectors/use-get-current-user-selectors";
import useSessionLogic from "../logic/use-session-logic";

const useGetBookSessionResultSwal = () => {
  const { noActionsFiredYet } = useReturnLogic();
  const { successSwal } = useSuccessSwal();
  const { updateSessionDocErrorSwal } = useUpdateSessionDocErrorSwal();
  const { swalConfirmed, updateBalanceErrorResetSessionDocSwal } =
    useUpdateBalanceErrorResetSessionDocSwal();
  const { addSessionBookingInfoErrorSwal } =
    useAddSessionBookingInfoErrorSwal();
  const { successfulBookingButFailedBalanceFetchSwal } =
    useSuccessfulBookingButFailedBalanceFetchSwal();
  const { currentUserWalletBalanceResult } = useGetCurrentUserSelectors();
  const {
    updateSessionResult,
    updateBalanceResult,
    addSessionBookingInfoResult,
  } = useSessionLogic();

  useEffect(() => {
    if (noActionsFiredYet() || swalConfirmed) return;
    if (
      updateSessionResult === "fulfilled" &&
      updateBalanceResult === "fulfilled" &&
      addSessionBookingInfoResult === "fulfilled" &&
      currentUserWalletBalanceResult === "success"
    ) {
      successSwal();
    } else if (
      updateSessionResult === "fulfilled" &&
      updateBalanceResult === "fulfilled" &&
      addSessionBookingInfoResult === "fulfilled" &&
      currentUserWalletBalanceResult === "rejected"
    ) {
      successfulBookingButFailedBalanceFetchSwal();
    } else if (updateSessionResult === "rejected") {
      updateSessionDocErrorSwal();
    } else if (
      updateSessionResult === "fulfilled" &&
      updateBalanceResult === "rejected"
    ) {
      updateBalanceErrorResetSessionDocSwal();
    } else if (
      updateSessionResult === "fulfilled" &&
      updateBalanceResult === "fulfilled" &&
      addSessionBookingInfoResult === "rejected"
    ) {
      addSessionBookingInfoErrorSwal();
    }
  }, [
    noActionsFiredYet,
    successSwal,
    swalConfirmed,
    updateBalanceErrorResetSessionDocSwal,
    updateBalanceResult,
    updateSessionDocErrorSwal,
    updateSessionResult,
    addSessionBookingInfoResult,
    addSessionBookingInfoErrorSwal,
    currentUserWalletBalanceResult,
    successfulBookingButFailedBalanceFetchSwal,
  ]);
};

export default useGetBookSessionResultSwal;
