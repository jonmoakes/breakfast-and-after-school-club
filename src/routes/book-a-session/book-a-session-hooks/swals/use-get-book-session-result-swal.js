import { useEffect } from "react";
import { useSelector } from "react-redux";

import useReturnLogic from "../use-return-logic";
import useSuccessSwal from "./use-success-swal";
import useUpdateSessionDocErrorSwal from "./use-update-session-doc-error-swal";
import useUpdateBalanceErrorResetSessionDocSwal from "./use-update-balance-error-reset-session-doc-swal";
import useAddSessionBookingInfoErrorSwal from "./use-add-session-booking-info-error-swal";

import {
  selectUpdateSessionDoc,
  selectUpdateUserDocBalance,
  selectAddSessionBookingInfo,
} from "../../../../store/book-session/book-session.selector";

const useGetBookSessionResultSwal = () => {
  const { noActionsFiredYet } = useReturnLogic();
  const { successSwal } = useSuccessSwal();
  const { updateSessionDocErrorSwal } = useUpdateSessionDocErrorSwal();
  const { swalConfirmed, updateBalanceErrorResetSessionDocSwal } =
    useUpdateBalanceErrorResetSessionDocSwal();
  const { addSessionBookingInfoErrorSwal } =
    useAddSessionBookingInfoErrorSwal();

  const updateSessionDoc = useSelector(selectUpdateSessionDoc);
  const updateUserDocBalance = useSelector(selectUpdateUserDocBalance);
  const addSessionBookingInfo = useSelector(selectAddSessionBookingInfo);

  const updateSessionResult = updateSessionDoc.result;
  const updateBalanceResult = updateUserDocBalance.result;
  const addSessionBookingInfoResult = addSessionBookingInfo.result;

  useEffect(() => {
    if (noActionsFiredYet() || swalConfirmed) return;

    if (
      updateSessionResult === "fulfilled" &&
      updateBalanceResult === "fulfilled" &&
      addSessionBookingInfoResult === "fulfilled"
    ) {
      successSwal();
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
  ]);
};

export default useGetBookSessionResultSwal;
