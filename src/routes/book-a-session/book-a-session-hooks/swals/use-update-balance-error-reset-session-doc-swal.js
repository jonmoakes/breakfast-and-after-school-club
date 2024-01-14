import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useConditionalLogic from "../use-conditional-logic";
import useSendResetSessionSpacesErrorEmail from "../emails/use-send-reset-session-spaces-error-email";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import {
  selectChildrenSelectedForBooking,
  selectSessionType,
  selectUpdateUserDocBalance,
} from "../../../../store/book-session/book-session.selector";
import { selectEnvironmentVariables } from "../../../../store/user/user.selector";
import { resetSessionDocAsync } from "../../../../store/book-session/book-session-thunks";

import {
  errorUpdatingBalanceMessage,
  errorInstructions,
  resetSessionErrorMessage,
  bookSessionRoute,
} from "../../../../strings/strings";

const useUpdateBalanceErrorResetSessionDocSwal = () => {
  const { fireSwal } = useFireSwal();
  const { sendResetSessionSpacesErrorEmail } =
    useSendResetSessionSpacesErrorEmail();

  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { date } = useConditionalLogic();

  const childrenSelectedForBooking = useSelector(
    selectChildrenSelectedForBooking
  );
  const sessionType = useSelector(selectSessionType);
  const envVariables = useSelector(selectEnvironmentVariables);

  const updateUserDocBalance = useSelector(selectUpdateUserDocBalance);
  const updateBalanceError = updateUserDocBalance.error;
  const { databaseId, termDatesCollectionId: collectionId } = envVariables;

  const [swalConfirmed, setSwalConfirmed] = useState(false);
  const dispatch = useDispatch();

  // the error here is that whilst session spaces have been updated, the users balance has not.
  // we therefore reset the session spaces and to the user, we just make it appear as a generic fail.
  // the session spaces are then attempted to be reset when they tap ok.
  // if resetting the session spaces fails, we need to inform the app owner via email to update the session spaces manually.
  // the user is not informed of the session spaces error, but to tap ok which will email the app owner with details of the error for them to update manually.
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
            childrenSelectedForBooking,
            date,
            databaseId,
            collectionId,
            sessionType,
          })
        ).then((action) => {
          if (resetSessionDocAsync.fulfilled.match(action)) {
            hamburgerHandlerNavigate(bookSessionRoute);
          } else {
            fireSwal(
              "error",
              resetSessionErrorMessage,
              errorInstructions,
              0,
              true,
              false
            ).then((isConfirmed) => {
              if (isConfirmed) {
                sendResetSessionSpacesErrorEmail();
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
