import { useEffect } from "react";

import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import useDatabaseManagementActions from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useFireSwal from "../../../hooks/use-fire-swal";

import {
  balanceAddedSessionSpacesUpdatedAddBookingFailedErrorMessage,
  balanceUpdateFailedErrorMessage,
  balanceUpdatedSessionSpacesFailedErrorMessage,
  bookingManuallyAddedFailedErrorMessage,
  errorReceivedMessageWithoutContactDetail,
  sessionSpacesUpdatedAddBookingFailedErrorMessage,
  userHasInsufficentFundsErrorMessage,
} from "../../../strings/errors/errors-strings";
import { bookingSuccessfullyAddedMessage } from "../../../strings/successes/successes-strings";
import { databaseManagementRoute } from "../../../strings/routes/routes-strings";

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
  const {
    dispatchResetAddBookingResult,
    dispatchResetAddBookingError,
    dispatchResetUpdateBalanceResult,
    dispatchResetUpdateBalanceError,
    dispatchResetUpdateSessionSpacesResult,
    dispatchResetUpdateSessionSpacesError,
  } = useDatabaseManagementActions();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const { fireSwal } = useFireSwal();

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
      fireSwal(
        "success",
        bookingSuccessfullyAddedMessage,
        "",
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          hamburgerHandlerNavigate(databaseManagementRoute);
        }
      });
    } else if (
      userOfAppChoice === "user" &&
      updateBalanceResult === "rejected" &&
      updateBalanceError.includes("Value must be a valid range")
    ) {
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
    } else if (
      userOfAppChoice === "user" &&
      updateBalanceResult === "rejected" &&
      !updateBalanceError.includes("Value must be a valid range")
    ) {
      const error = updateBalanceError;
      fireSwal(
        "error",
        balanceUpdateFailedErrorMessage,
        errorReceivedMessageWithoutContactDetail(error),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatchResetUpdateBalanceResult();
          dispatchResetUpdateBalanceError();
        }
      });
    } else if (
      userOfAppChoice === "user" &&
      updateBalanceResult === "fulfilled" &&
      updateSessionSpacesResult === "rejected"
    ) {
      const error = updateSessionSpacesError;
      fireSwal(
        "error",
        balanceUpdatedSessionSpacesFailedErrorMessage,
        errorReceivedMessageWithoutContactDetail(error),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatchResetUpdateBalanceResult();
          dispatchResetUpdateSessionSpacesError();
          dispatchResetUpdateSessionSpacesResult();
        }
      });
    } else if (
      userOfAppChoice === "user" &&
      updateBalanceResult === "fulfilled" &&
      updateSessionSpacesResult === "fulfilled" &&
      addBookingResult === "rejected"
    ) {
      const error = addBookingError;
      fireSwal(
        "error",
        balanceAddedSessionSpacesUpdatedAddBookingFailedErrorMessage,
        errorReceivedMessageWithoutContactDetail(error),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatchResetUpdateBalanceResult();
          dispatchResetUpdateSessionSpacesResult();
          dispatchResetAddBookingResult();
          dispatchResetAddBookingError();
        }
      });
    } else if (
      (userOfAppChoice === "non user" &&
        updateSessionSpacesResult === "rejected") ||
      (errorId === "2" && addBookingResult === "rejected")
    ) {
      const error = addBookingError;
      fireSwal(
        "error",
        bookingManuallyAddedFailedErrorMessage,
        errorReceivedMessageWithoutContactDetail(error),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed && !errorId) {
          dispatchResetUpdateSessionSpacesResult();
          dispatchResetUpdateSessionSpacesError();
        } else if (isConfirmed && errorId === "2") {
          dispatchResetAddBookingResult();
          dispatchResetAddBookingError();
        }
      });
    } else if (
      userOfAppChoice === "non user" &&
      updateSessionSpacesResult === "fulfilled" &&
      addBookingResult === "rejected"
    ) {
      const error = addBookingError;
      fireSwal(
        "error",
        sessionSpacesUpdatedAddBookingFailedErrorMessage,
        errorReceivedMessageWithoutContactDetail(error),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatchResetUpdateSessionSpacesResult();
          dispatchResetAddBookingResult();
          dispatchResetAddBookingError();
        }
      });
    }
  }, [
    fireSwal,
    hamburgerHandlerNavigate,
    addBookingError,
    addBookingResult,
    dispatchResetAddBookingError,
    dispatchResetAddBookingResult,
    errorId,
    dispatchResetUpdateSessionSpacesResult,
    dispatchResetUpdateSessionSpacesError,
    updateSessionSpacesError,
    updateSessionSpacesResult,
    dispatchResetUpdateBalanceResult,
    dispatchResetUpdateBalanceError,
    updateBalanceError,
    updateBalanceResult,
    userOfAppChoice,
  ]);
};

export default useAddBookingResultSwal;
