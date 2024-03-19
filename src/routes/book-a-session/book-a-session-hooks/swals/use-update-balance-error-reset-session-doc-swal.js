import { useState } from "react";
import { useDispatch } from "react-redux";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useSendResetSessionSpacesErrorEmail from "../emails/use-send-reset-session-spaces-error-email";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";
import useDatesLogic from "../logic/use-dates-logic";
import useSessionLogic from "../logic/use-session-logic";
import useGetCurrentUserSelectors from "../../../../hooks/get-selectors/use-get-current-user-selectors";

import { resetSessionDocAsync } from "../../../../store/book-session/book-session.thunks";

import {
  errorUpdatingBalanceMessage,
  errorInstructions,
  resetSessionErrorMessage,
} from "../../../../strings/errors/errors-strings";
import { bookSessionRoute } from "../../../../strings/routes/routes-strings";

const useUpdateBalanceErrorResetSessionDocSwal = () => {
  const { fireSwal } = useFireSwal();
  const { sendResetSessionSpacesErrorEmail } =
    useSendResetSessionSpacesErrorEmail();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { date } = useDatesLogic();
  const { numberOfSpacesToAdd, updateBalanceError, sessionType } =
    useSessionLogic();

  const { databaseId, termDatesCollectionId: collectionId } =
    useGetCurrentUserSelectors();

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
            date,
            databaseId,
            collectionId,
            sessionType,
            numberOfSpacesToAdd,
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
