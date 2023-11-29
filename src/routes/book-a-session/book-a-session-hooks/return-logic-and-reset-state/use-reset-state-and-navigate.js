import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { resetRequestDateDataState } from "../../../../store/request-date-data/request-date-data.slice";
import { resetBookSessionState } from "../../../../store/book-session/book-session.slice";
import { resetSendEmailState } from "../../../../store/send-email/send-email.slice";

const useResetStateAndNavigate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const resetStateAndNavigate = useCallback(
    (route) => {
      dispatch(resetRequestDateDataState());
      dispatch(resetBookSessionState());
      dispatch(resetSendEmailState());
      navigate(route);
    },
    [navigate, dispatch]
  );

  return { resetStateAndNavigate };
};

export default useResetStateAndNavigate;
