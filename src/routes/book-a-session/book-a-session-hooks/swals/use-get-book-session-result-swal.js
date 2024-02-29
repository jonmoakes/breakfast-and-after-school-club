import { useEffect } from "react";
import { useSelector } from "react-redux";

import useReturnLogic from "../use-return-logic";
import useSuccessSwal from "./use-success-swal";
import useUpdateSessionDocErrorSwal from "./use-update-session-doc-error-swal";
import useUpdateBalanceErrorResetSessionDocSwal from "./use-update-balance-error-reset-session-doc-swal";
import useAddSessionBookingInfoErrorSwal from "./use-add-session-booking-info-error-swal";

import { selectBookSessionSelectors } from "../../../../store/book-session/book-session.slice";
import { selectCurrentUserSelectors } from "../../../../store/user/user.slice";
import useSuccessfulBookingButFailedBalanceFetchSwal from "./use-successful-booking-but-failed-balance-fetch-swal";

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

  const { updateSessionDoc, updateUserDocBalance, addSessionBookingInfo } =
    useSelector(selectBookSessionSelectors);
  const { currentUserWalletBalanceResult } = useSelector(
    selectCurrentUserSelectors
  );

  const updateSessionResult = updateSessionDoc.result;
  const updateBalanceResult = updateUserDocBalance.result;
  const addSessionBookingInfoResult = addSessionBookingInfo.result;

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
