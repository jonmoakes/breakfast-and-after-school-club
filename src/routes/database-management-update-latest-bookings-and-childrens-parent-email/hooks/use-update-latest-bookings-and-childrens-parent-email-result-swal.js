import { useEffect } from "react";

import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useFireSwal from "../../../hooks/use-fire-swal";
import useDatabaseManagementActions from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import {
  bookingsEmailUpdatedChildrensListFailedErrorMessage,
  errorReceivedMessageWithoutContactDetail,
  latestBookingsUpdateEmailFailedErrorMessage,
} from "../../../strings/errors/errors-strings";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import { databaseManagementRoute } from "../../../strings/routes/routes-strings";
import { emailsUpdatedSuccessMessage } from "../../../strings/successes/successes-strings";

const useUpdateLatestBookingsAndChildrensParentEmailResultSwal = () => {
  const {
    updateBookingEmailsResult,
    updateBookingEmailsError,
    updateChildrensListEmailResult,
    updateChildrensListEmailError,
  } = useGetDatabaseManagementSelectors();
  const {
    dispatchResetUpdateBookingEmailsResult,
    dispatchResetUpdateBookingEmailsError,
  } = useDatabaseManagementActions();
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  useEffect(() => {
    if (
      !updateBookingEmailsResult &&
      !updateBookingEmailsError &&
      !updateChildrensListEmailResult &&
      !updateChildrensListEmailError
    )
      return;

    if (
      updateBookingEmailsResult === "fulfilled" &&
      updateChildrensListEmailResult === "fulfilled"
    ) {
      fireSwal("success", emailsUpdatedSuccessMessage, "", 0, true, false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            hamburgerHandlerNavigate(databaseManagementRoute);
          }
        }
      );
    } else if (updateBookingEmailsResult === "rejected") {
      const error = updateBookingEmailsError;
      fireSwal(
        "error",
        latestBookingsUpdateEmailFailedErrorMessage,
        errorReceivedMessageWithoutContactDetail(error),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatchResetUpdateBookingEmailsResult();
          dispatchResetUpdateBookingEmailsError();
        }
      });
    } else if (
      updateBookingEmailsResult === "fulfilled" &&
      updateChildrensListEmailResult === "rejected"
    ) {
      const error = updateChildrensListEmailError;
      fireSwal(
        "error",
        bookingsEmailUpdatedChildrensListFailedErrorMessage(error),
        "",
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          hamburgerHandlerNavigate(databaseManagementRoute);
        }
      });
    }
  }, [
    updateBookingEmailsResult,
    updateBookingEmailsError,
    updateChildrensListEmailResult,
    updateChildrensListEmailError,
    fireSwal,
    dispatchResetUpdateBookingEmailsResult,
    dispatchResetUpdateBookingEmailsError,
    hamburgerHandlerNavigate,
  ]);
};

export default useUpdateLatestBookingsAndChildrensParentEmailResultSwal;
