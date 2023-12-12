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

  const updateUserDocBalance = useSelector(selectUpdateUserDocBalance);
  const updateBalanceError = updateUserDocBalance.error;

  const [swalConfirmed, setSwalConfirmed] = useState(false);
  const dispatch = useDispatch();

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
