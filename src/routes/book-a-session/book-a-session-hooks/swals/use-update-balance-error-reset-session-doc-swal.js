import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useResetStateAndNavigate from "../return-logic-and-reset-state/use-reset-state-and-navigate";
import useGetRequestDateDataValues from "../use-get-request-date-data-values";

import {
  selectSessionType,
  selectUpdateUserDocBalance,
} from "../../../../store/book-session/book-session.selector";
import { resetSessionDocAsync } from "../../../../store/book-session/book-session-thunks";

import {
  accountRoute,
  contactRoute,
  errorBookingSessionMessage,
  resetSessionErrorMessage,
} from "../../../../strings/strings";

const useUpdateBalanceErrorResetSessionDocSwal = () => {
  const { fireSwal } = useFireSwal();
  const { resetStateAndNavigate } = useResetStateAndNavigate();
  const { date } = useGetRequestDateDataValues();

  const sessionType = useSelector(selectSessionType);
  const updateUserDocBalance = useSelector(selectUpdateUserDocBalance);
  const updateBalanceError = updateUserDocBalance.error;

  const [swalConfirmed, setSwalConfirmed] = useState(false);
  const dispatch = useDispatch();

  const updateBalanceErrorResetSessionDocSwal = () => {
    fireSwal(
      "error",
      errorBookingSessionMessage,
      `"${updateBalanceError}"`,
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        setSwalConfirmed(true);
        dispatch(resetSessionDocAsync({ date, sessionType })).then((action) => {
          if (resetSessionDocAsync.fulfilled.match(action)) {
            resetStateAndNavigate(accountRoute);
          } else if (resetSessionDocAsync.rejected.match(action)) {
            fireSwal(
              "error",
              resetSessionErrorMessage,
              action.payload,
              0,
              true,
              false
            ).then((isConfirmed) => {
              if (isConfirmed) {
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
