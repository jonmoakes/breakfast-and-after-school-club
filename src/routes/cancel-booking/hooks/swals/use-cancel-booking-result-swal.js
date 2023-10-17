import { useEffect } from "react";
import { useSelector } from "react-redux";

import useReturnLogic from "../return-logic-and-reset-state/use-return-logic";
import useSuccessSwal from "./use-success-swal";

import {
  selectUpdateBookingsDoc,
  selectUpdateUserDocBalance,
} from "../../../../store/user-booking-to-delete/user-booking-to-delete.selector";
import useUpdateBookingsResultErrorSwal from "./use-update-bookings-result-error-swal";
import useUpdateBalanceResultErrorSwal from "./use-update-balance-error-swal";

const useCancelBookingResultSwal = () => {
  const { noActionsFiredYet } = useReturnLogic();
  const { successSwal } = useSuccessSwal();
  const { updateBookingsResultErrorSwal } = useUpdateBookingsResultErrorSwal();
  const { updateBalanceResultErrorSwal } = useUpdateBalanceResultErrorSwal();

  const updateBookingsDoc = useSelector(selectUpdateBookingsDoc);
  const updateUserDocBalance = useSelector(selectUpdateUserDocBalance);

  const updateBookingsResult = updateBookingsDoc.result;
  const updateBalanceResult = updateUserDocBalance.result;

  useEffect(() => {
    if (noActionsFiredYet()) return;
    if (
      updateBookingsResult === "fulfilled" &&
      updateBalanceResult === "fulfilled"
    ) {
      successSwal();
    } else if (updateBookingsResult === "rejected") {
      updateBookingsResultErrorSwal();
    } else if (
      updateBookingsResult === "fulfilled" &&
      updateBalanceResult === "rejected"
    ) {
      updateBalanceResultErrorSwal();
    }
  }, [
    noActionsFiredYet,
    updateBalanceResult,
    updateBookingsResult,
    successSwal,
    updateBookingsResultErrorSwal,
    updateBalanceResultErrorSwal,
  ]);
};

export default useCancelBookingResultSwal;
