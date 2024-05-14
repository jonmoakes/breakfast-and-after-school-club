import { useEffect } from "react";

import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useAddBookingSuccessSwal from "./swals/use-add-booking-success-swal";
import useInsufficientFundsSwal from "./swals/use-insufficient-funds-swal";
import useAddBookingUpdateBalanceFailedSwal from "./swals/use-add-booking-update-balance-failed-swal";
import useAddBookingUpdateBalanceFulfilledUpdateSessionSpacesFailedSwal from "./swals/use-add-booking-update-balance-fulfilled-update-session-spaces-failed-swal";
import useAddBookingUpdateBalanceFulfilledUpdateSessionSpacesFulfilledAddBookingFailedSwal from "./swals/use-add-booking-update-balance-fulfilled-update-session-spaces-fulfilled-add-booking-failed-swal";
import useUpdateSessionSpacesOrAddBookingFailedSwal from "./swals/use-add-booking-update-session-spaces-or-add-booking-failed-swal";
import useUpdateSessionSpacesFulfilledAddBookingFailedSwal from "./swals/use-add-booking-update-session-spaces-fulfilled-add-booking-failed-swal";

const useAddBookingResultSwal = () => {
  const {
    addBookingResult,
    addBookingError,
    updateSessionSpacesResult,
    updateSessionSpacesError,
    updateBalanceResult,
    updateBalanceError,
    errorId,
    userOfAppChoice,
  } = useGetDatabaseManagementSelectors();

  const { addBookingSuccessSwal } = useAddBookingSuccessSwal();
  const { insufficientFundsSwal } = useInsufficientFundsSwal();
  const { addBookingUpdateBalanceFailedSwal } =
    useAddBookingUpdateBalanceFailedSwal();
  const { addBookingUpdateBalanceFulfilledUpdateSessionSpacesFailedSwal } =
    useAddBookingUpdateBalanceFulfilledUpdateSessionSpacesFailedSwal();
  const {
    addBookingUpdateBalanceFulfilledUpdateSessionSpacesFulfilledAddBookingFailedSwal,
  } =
    useAddBookingUpdateBalanceFulfilledUpdateSessionSpacesFulfilledAddBookingFailedSwal();
  const { updateSessionSpacesOrAddBookingFailedSwal } =
    useUpdateSessionSpacesOrAddBookingFailedSwal();
  const { updateSessionSpacesFulfilledAddBookingFailedSwal } =
    useUpdateSessionSpacesFulfilledAddBookingFailedSwal();

  useEffect(() => {
    if (
      !addBookingResult &&
      !addBookingError &&
      !updateBalanceResult &&
      !updateBalanceError &&
      !updateSessionSpacesResult &&
      !updateSessionSpacesError
    )
      return;

    if (
      (!errorId &&
        userOfAppChoice === "non user" &&
        updateSessionSpacesResult === "fulfilled" &&
        addBookingResult === "fulfilled") ||
      (!errorId &&
        userOfAppChoice === "user" &&
        updateBalanceResult === "fulfilled" &&
        updateSessionSpacesResult === "fulfilled" &&
        addBookingResult === "fulfilled") ||
      (errorId === "2" && addBookingResult === "fulfilled")
    ) {
      addBookingSuccessSwal();
    } else if (
      userOfAppChoice === "user" &&
      updateBalanceResult === "rejected" &&
      updateBalanceError.includes("Value must be a valid range")
    ) {
      insufficientFundsSwal();
    } else if (
      userOfAppChoice === "user" &&
      updateBalanceResult === "rejected" &&
      !updateBalanceError.includes("Value must be a valid range")
    ) {
      addBookingUpdateBalanceFailedSwal();
    } else if (
      userOfAppChoice === "user" &&
      updateBalanceResult === "fulfilled" &&
      updateSessionSpacesResult === "rejected"
    ) {
      addBookingUpdateBalanceFulfilledUpdateSessionSpacesFailedSwal();
    } else if (
      userOfAppChoice === "user" &&
      updateBalanceResult === "fulfilled" &&
      updateSessionSpacesResult === "fulfilled" &&
      addBookingResult === "rejected"
    ) {
      addBookingUpdateBalanceFulfilledUpdateSessionSpacesFulfilledAddBookingFailedSwal();
    } else if (
      (userOfAppChoice === "non user" &&
        updateSessionSpacesResult === "rejected") ||
      (errorId === "2" && addBookingResult === "rejected")
    ) {
      updateSessionSpacesOrAddBookingFailedSwal();
    } else if (
      userOfAppChoice === "non user" &&
      updateSessionSpacesResult === "fulfilled" &&
      addBookingResult === "rejected"
    ) {
      updateSessionSpacesFulfilledAddBookingFailedSwal();
    }
  }, [
    addBookingError,
    addBookingResult,
    errorId,
    updateSessionSpacesError,
    updateSessionSpacesResult,
    updateBalanceError,
    updateBalanceResult,
    userOfAppChoice,
    addBookingSuccessSwal,
    insufficientFundsSwal,
    addBookingUpdateBalanceFailedSwal,
    addBookingUpdateBalanceFulfilledUpdateSessionSpacesFailedSwal,
    addBookingUpdateBalanceFulfilledUpdateSessionSpacesFulfilledAddBookingFailedSwal,
    updateSessionSpacesOrAddBookingFailedSwal,
    updateSessionSpacesFulfilledAddBookingFailedSwal,
  ]);
};

export default useAddBookingResultSwal;
