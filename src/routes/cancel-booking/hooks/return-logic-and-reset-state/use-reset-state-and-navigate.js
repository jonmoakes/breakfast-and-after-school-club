import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { resetBookingToDeleteState } from "../../../../store/user-booking-to-delete/user-booking-to-delete.slice";

const useResetStateAndNavigate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const resetStateAndNavigate = useCallback(
    (route) => {
      dispatch(resetBookingToDeleteState());
      navigate(route);
    },
    [dispatch, navigate]
  );

  return { resetStateAndNavigate };
};

export default useResetStateAndNavigate;
