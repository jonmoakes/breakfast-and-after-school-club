import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useResetStateAndNavigate from "../return-logic-and-reset-state/use-reset-state-and-navigate";
import useConditionalLogic from "../use-conditional-logic";

import {
  selectChildrenSelectedForBooking,
  selectSessionType,
  selectUpdateUserDocBalance,
} from "../../../../store/book-session/book-session.selector";
import { selectCurrentUser } from "../../../../store/user/user.selector";
import { resetSessionDocAsync } from "../../../../store/book-session/book-session-thunks";
import { setContactFormDetailsWhenBookingError } from "../../../../store/contact-form/contact-form.slice";

import {
  accountRoute,
  contactRoute,
  errorUpdatingBalanceMessage,
  errorInstructions,
  resetSessionErrorMessage,
} from "../../../../strings/strings";

const useUpdateBalanceErrorResetSessionDocSwal = () => {
  const { fireSwal } = useFireSwal();
  const { resetStateAndNavigate } = useResetStateAndNavigate();
  const { date } = useConditionalLogic();

  const currentUser = useSelector(selectCurrentUser);
  const childrenSelectedForBooking = useSelector(
    selectChildrenSelectedForBooking
  );
  const sessionType = useSelector(selectSessionType);

  const updateUserDocBalance = useSelector(selectUpdateUserDocBalance);
  const updateBalanceError = updateUserDocBalance.error;

  const [swalConfirmed, setSwalConfirmed] = useState(false);
  const dispatch = useDispatch();

  const numberOfSpacesToAdd = childrenSelectedForBooking.length
    ? childrenSelectedForBooking.length
    : 1;

  const { name, email } = currentUser;
  const errorToSend = {
    name,
    email,
    message: `Session Spaces Error:\n\nDate:\n${date}\n\nSession Type:\n${sessionType}\n\nSpaces To Add:\n${numberOfSpacesToAdd}`,
  };

  // here, the session spaces have been updated but the users balance has not been deducted due to error. the goal is to reset the session spaces to what they were before the attempted booking.
  // When the user clicks ok, we try to reset the sessions back to what they were.
  // if resetting the sessions fails, then the sessions spaces is still wrong but the balance doesn't need correcting as we are going to manually update the session spaces using the data in the errorToSend variable above.
  // this needs to be sent via email.

  const updateBalanceErrorResetSessionDocSwal = () => {
    fireSwal(
      "error",
      errorUpdatingBalanceMessage,
      updateBalanceError,
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        setSwalConfirmed(true);
        dispatch(
          resetSessionDocAsync({
            date,
            sessionType,
            childrenSelectedForBooking,
          })
        ).then((action) => {
          if (resetSessionDocAsync.fulfilled.match(action)) {
            resetStateAndNavigate(accountRoute);
          } else if (resetSessionDocAsync.rejected.match(action)) {
            // send an email containing errorToSend. navigate to bookSessionRoute on successful email send.
            fireSwal(
              "error",
              resetSessionErrorMessage,
              errorInstructions,
              0,
              true,
              false
            ).then((isConfirmed) => {
              if (isConfirmed) {
                dispatch(setContactFormDetailsWhenBookingError(errorToSend));
                resetStateAndNavigate(contactRoute);
              }
            });
          }
        });
      }
    });
  };

  return { swalConfirmed, updateBalanceErrorResetSessionDocSwal };
};

export default useUpdateBalanceErrorResetSessionDocSwal;
