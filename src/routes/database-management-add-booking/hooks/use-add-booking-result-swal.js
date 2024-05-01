import { useEffect } from "react";

import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import useDatabaseManagementActions from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useFireSwal from "../../../hooks/use-fire-swal";

import {
  dbManageErrorAddingBookingToDatabaseMessage,
  errorReceivedMessage,
} from "../../../strings/errors/errors-strings";
import { bookingSuccessfullyAddedMessage } from "../../../strings/successes/successes-strings";
import { databaseManagementRoute } from "../../../strings/routes/routes-strings";

const useAddBookingResultSwal = () => {
  const { addBookingResult, addBookingError } =
    useGetDatabaseManagementSelectors();
  const { dispatchResetAddBookingResult, dispatchResetAddBookingError } =
    useDatabaseManagementActions();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (!addBookingResult && !addBookingError) return;

    if (addBookingResult === "fulfilled") {
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
    } else {
      const error = addBookingError;
      fireSwal(
        "error",
        dbManageErrorAddingBookingToDatabaseMessage,
        errorReceivedMessage(error),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
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
  ]);
};

export default useAddBookingResultSwal;
