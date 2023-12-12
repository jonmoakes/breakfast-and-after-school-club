import { useEffect } from "react";
import { useSelector } from "react-redux";

import useReturnLogic from "../use-return-logic";
import useSuccessSwal from "./use-success-swal";
import useUpdateBookingsResultErrorSwal from "./use-update-bookings-result-error-swal";
import useUpdateBalanceErrorSwal from "./use-update-balance-error-swal";
import useUpdateSessionSpacesAndBalanceErrorSwal from "./use-update-session-spaces-and-balance-error-swal";

import {
  selectUpdateBookingsDoc,
  selectUpdateSessionSpacesDoc,
  selectUpdateUserDocBalance,
} from "../../../../store/user-booking-to-delete/user-booking-to-delete.selector";

const useCancelBookingResultSwal = () => {
  const { noActionsFiredYet } = useReturnLogic();
  const { successSwal } = useSuccessSwal();
  const { updateBookingsResultErrorSwal } = useUpdateBookingsResultErrorSwal();
  const { updateBalanceErrorSwal } = useUpdateBalanceErrorSwal();
  const { updateSessionSpacesAndBalanceErrorSwal } =
    useUpdateSessionSpacesAndBalanceErrorSwal();

  const updateBookingsDoc = useSelector(selectUpdateBookingsDoc);
  const updateUserDocBalance = useSelector(selectUpdateUserDocBalance);
  const updateSessionSpacesDoc = useSelector(selectUpdateSessionSpacesDoc);

  const updateBookingsResult = updateBookingsDoc.result;
  const updateBalanceResult = updateUserDocBalance.result;
  const updateSessionSpacesResult = updateSessionSpacesDoc.result;

  useEffect(() => {
    if (noActionsFiredYet()) return;
    if (
      updateBookingsResult === "fulfilled" &&
      updateSessionSpacesResult === "fulfilled" &&
      updateBalanceResult === "fulfilled"
    ) {
      successSwal();
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
  ]);
};

export default useCancelBookingResultSwal;
