import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useFireSwal from "../../../hooks/use-fire-swal";
import useGetRequestDateDataValues from "./use-get-request-date-data-values";

import {
  selectResetSessionDoc,
  selectSessionType,
  selectUpdateSessionDoc,
  selectUpdateUserDocBalance,
} from "../../../store/book-session/book-session.selector";
import { resetBookSessionState } from "../../../store/book-session/book-session.slice";
import { resetSessionDocAsync } from "../../../store/book-session/book-session-thunks";
import { resetRequestDateDataState } from "../../../store/request-date-data/request-date-data.slice";

import {
  accountRoute,
  bookSessionRoute,
  contactRoute,
  errorBookingSessionMessage,
  resetSessionErrorMessage,
  sessionBookedMessage,
  updateSessionDocErrorMessage,
  viewBookingsMessage,
} from "../../../strings/strings";

const useGetBookSessionResultSwal = () => {
  const { fireSwal } = useFireSwal();

  const updateSessionDoc = useSelector(selectUpdateSessionDoc);
  const updateUserDocBalance = useSelector(selectUpdateUserDocBalance);
  const resetSessionDoc = useSelector(selectResetSessionDoc);
  const sessionType = useSelector(selectSessionType);

  const [swalConfirmed, setSwalConfirmed] = useState(false);

  const updateSessionResult = updateSessionDoc.result;
  const updateSessionError = updateSessionDoc.error;

  const updateBalanceResult = updateUserDocBalance.result;
  const updateBalanceError = updateUserDocBalance.error;

  const resetSessionResult = resetSessionDoc.result;
  const resetSessionError = resetSessionDoc.error;

  const { date } = useGetRequestDateDataValues();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const noActionsFiredYet = useCallback(() => {
    return !updateSessionResult &&
      !updateSessionError &&
      updateBalanceResult &&
      !updateBalanceError &&
      !resetSessionResult &&
      !resetSessionError
      ? true
      : false;
  }, [
    resetSessionError,
    resetSessionResult,
    updateBalanceError,
    updateBalanceResult,
    updateSessionError,
    updateSessionResult,
  ]);

  const resetStateAndNavigate = useCallback(
    (route) => {
      dispatch(resetRequestDateDataState());
      dispatch(resetBookSessionState());
      navigate(route);
    },
    [dispatch, navigate]
  );

  useEffect(() => {
    if (noActionsFiredYet() || swalConfirmed) return;

    if (
      updateSessionResult === "fulfilled" &&
      updateBalanceResult === "fulfilled"
    ) {
      fireSwal(
        "success",
        sessionBookedMessage,
        viewBookingsMessage,
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          resetStateAndNavigate(accountRoute);
        }
      });
    } else if (updateSessionResult === "rejected") {
      fireSwal(
        "error",
        updateSessionDocErrorMessage,
        `"${updateSessionError}"`,
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          resetStateAndNavigate(bookSessionRoute);
        }
      });
    } else if (
      updateSessionResult === "fulfilled" &&
      updateBalanceResult === "rejected"
    ) {
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
          dispatch(resetSessionDocAsync({ date, sessionType })).then(
            (action) => {
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
            }
          );
        }
      });
    }
  }, [
    noActionsFiredYet,
    updateSessionError,
    updateBalanceError,
    fireSwal,
    updateSessionResult,
    updateBalanceResult,
    resetStateAndNavigate,
    date,
    dispatch,
    sessionType,
    updateSessionDoc,
    resetSessionResult,
    resetSessionError,
    swalConfirmed,
  ]);
};

export default useGetBookSessionResultSwal;
