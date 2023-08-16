import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { resetRequestDateDataState } from "../../../../store/request-date-data/request-date-data.slice";
import { resetBookSessionState } from "../../../../store/book-session/book-session.slice";

const useResetStateAndNavigate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const resetStateAndNavigate = useCallback(
    (route) => {
      dispatch(resetRequestDateDataState());
      dispatch(resetBookSessionState());
      navigate(route);
    },
    [dispatch, navigate]
  );

  return { resetStateAndNavigate };
};

export default useResetStateAndNavigate;
