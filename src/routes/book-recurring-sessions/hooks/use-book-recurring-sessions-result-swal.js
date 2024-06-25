import { useEffect, useState } from "react";
import useGetBookRecurringSessionsSelectors from "../../../hooks/get-selectors/use-get-book-recurring-sessions-selectors";

import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useBookRecurringSessionsActions from "../../../hooks/get-actions-and-thunks/book-recurring-sessions-actions-thunks/use-book-recurring-sessions-actions";
import {
  bookAnotherSessionQuestion,
  bookingSuccessfulConfirmSendEmailMessage,
  sendEmailButtonText,
} from "../../../strings/confirms/confirms-strings";
import { bookAnotherButtonText } from "../../../strings/infos/infos-strings";
import { bookedSessionsUserRoute } from "../../../strings/routes/routes-strings";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import { bookSessionSlice } from "../../../store/book-session/book-session.slice";
import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import { errorReceivedMessage } from "../../../strings/errors/errors-strings";
import useResetRecurringSessionSpacesThunk from "../../../hooks/get-actions-and-thunks/book-recurring-sessions-actions-thunks/use-reset-recurring-sessions-spaces";
import useBookRecurringSessionsVariables from "./use-book-recurring-sessions-variables";
import useRecurringSessionsFunctions from "./use-recurring-sessions-functions";
import useReturnLogic from "./use-return-logic";

const useBookRecurringSessionsResultSwal = () => {
  const {
    updateSessionSpacesResult,
    updateSessionSpacesError,
    addRecurringBookingsResult,
  } = useGetBookRecurringSessionsSelectors();
  const { updateBalanceResult } = useGetDatabaseManagementSelectors();
  const { numberOfChildrenInBooking, sessionChoice } =
    useBookRecurringSessionsVariables();
  const { bookingData } = useRecurringSessionsFunctions();
  const {
    dispatchResetUpdateSessionSpacesResult,
    dispatchResetUpdateSessionSpacesError,
  } = useBookRecurringSessionsActions();
  const { noActionsFiredYet } = useReturnLogic();

  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { resetRecurringSessionSpacesThunk } =
    useResetRecurringSessionSpacesThunk();

  const [swalConfirmed, setSwalConfirmed] = useState(false);

  useEffect(() => {
    if (noActionsFiredYet() || swalConfirmed) return;

    if (
      updateSessionSpacesResult === "fulfilled" &&
      updateBalanceResult === "fulfilled" &&
      addRecurringBookingsResult === "fulfilled"
    ) {
      fireSwal(
        "success",
        "sessions successfully booked!",
        "",
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          const sendEmail = () => {
            console.log("send email here");
            hamburgerHandlerNavigate(bookSessionSlice);
          };

          confirmSwal(
            bookingSuccessfulConfirmSendEmailMessage,
            "",
            sendEmailButtonText,
            () => sendEmail(),
            () =>
              confirmSwal(
                bookAnotherSessionQuestion,
                "",
                bookAnotherButtonText,
                () => window.location.reload(),
                () => hamburgerHandlerNavigate(bookedSessionsUserRoute)
              )
          );
        }
      });
    } else if (updateSessionSpacesResult === "rejected") {
      fireSwal(
        "error",
        "error making bookings, please try again.",
        errorReceivedMessage(updateSessionSpacesError),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatchResetUpdateSessionSpacesResult();
          dispatchResetUpdateSessionSpacesError();
        }
      });
    } else if (
      updateSessionSpacesResult === "fulfilled" &&
      updateBalanceResult === "rejected"
    ) {
      fireSwal(
        "error",
        "error making booking. please tap ok to continue.",
        updateSessionSpacesError,
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          setSwalConfirmed(true);
          resetRecurringSessionSpacesThunk(
            numberOfChildrenInBooking,
            bookingData,
            sessionChoice
          );
        }
      });
    } else if (
      updateSessionSpacesResult === "fulfilled" &&
      updateBalanceResult === "fulfilled" &&
      addRecurringBookingsResult === "rejected"
    ) {
      fireSwal(
        "error",
        "error adding sessions to database",
        "",
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          // dispatchAddRecurringBookingsResult();
          // dispatchAddRecurringBookingsError();
          //send email to app owner here
          // sendAddBookingInfoErrorEmailThunk(
          //   date,
          //   sessionType,
          //   childrenSelectedForBooking,
          //   usersChildren
          // );
        }
      });
    }
  }, [
    addRecurringBookingsResult,
    bookingData,
    confirmSwal,
    dispatchResetUpdateSessionSpacesError,
    dispatchResetUpdateSessionSpacesResult,
    fireSwal,
    hamburgerHandlerNavigate,
    noActionsFiredYet,
    numberOfChildrenInBooking,
    resetRecurringSessionSpacesThunk,
    sessionChoice,
    swalConfirmed,
    updateBalanceResult,
    updateSessionSpacesError,
    updateSessionSpacesResult,
  ]);
};

export default useBookRecurringSessionsResultSwal;
