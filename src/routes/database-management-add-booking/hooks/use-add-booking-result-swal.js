import { useEffect } from "react";

import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import useDatabaseManagementActions from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useFireSwal from "../../../hooks/use-fire-swal";

import {
  bookingManuallyAddedFailedErrorMessage,
  bookingManuallyAddedSessionSpacesFailedErrorMessage,
  errorReceivedMessageWithoutContactDetail,
} from "../../../strings/errors/errors-strings";
import { bookingSuccessfullyAddedMessage } from "../../../strings/successes/successes-strings";
import { databaseManagementRoute } from "../../../strings/routes/routes-strings";

const useAddBookingResultSwal = () => {
  const {
    addBookingResult,
    addBookingError,
    updateSessionSpacesResult,
    updateSessionSpacesError,
    errorId,
  } = useGetDatabaseManagementSelectors();
  const {
    dispatchResetAddBookingResult,
    dispatchResetAddBookingError,
    dispatchResetUpdateSessionSpacesResult,
    dispatchResetUpdateSessionSpacesError,
  } = useDatabaseManagementActions();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const { fireSwal } = useFireSwal();

  // if no error id, its adding a booking for a non app user, so session spaces also need to update. No balance update necessary as by not using the app, they will have paid vi another method.
  // if errorId is '2', then its adding booking data after user received an error. Session spaces and balance will have been already updated successfully as they happen before the adding of booking data.

  useEffect(() => {
    if (
      !addBookingResult &&
      !addBookingError &&
      !updateSessionSpacesResult &&
      !updateSessionSpacesError
    )
      return;

    if (
      (!errorId &&
        addBookingResult === "fulfilled" &&
        updateSessionSpacesResult === "fulfilled") ||
      (errorId === "2" &&
        addBookingResult === "fulfilled" &&
        !updateSessionSpacesResult)
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
    } else if (addBookingResult === "rejected") {
      const error = addBookingError;
      fireSwal(
        "error",
        bookingManuallyAddedFailedErrorMessage,
        errorReceivedMessageWithoutContactDetail(error),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatchResetAddBookingResult();
          dispatchResetAddBookingError();
        }
      });
    } else if (
      addBookingResult === "fulfilled" &&
      updateSessionSpacesResult === "rejected"
    ) {
      const error = updateSessionSpacesError;
      fireSwal(
        "error",
        bookingManuallyAddedSessionSpacesFailedErrorMessage,
        errorReceivedMessageWithoutContactDetail(error),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed && !errorId) {
          dispatchResetAddBookingResult();
          dispatchResetUpdateSessionSpacesResult();
          dispatchResetUpdateSessionSpacesError();
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
  ]);
};

export default useAddBookingResultSwal;
