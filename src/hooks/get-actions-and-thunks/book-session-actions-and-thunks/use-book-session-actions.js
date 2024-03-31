import { useDispatch } from "react-redux";

import {
  resetBookSessionState,
  setChildrenSelectedForBooking,
  setSessionPrice,
  setSessionType,
  resetSessionTypeAndPrice,
} from "../../../store/book-session/book-session.slice";

const useBookSessionActions = () => {
  const dispatch = useDispatch();

  const handleSetChildrenSelectedForBookingChange = (event) => {
    const { name, checked } = event.target;
    dispatch(setChildrenSelectedForBooking({ [name]: checked }));
  };

  const dispatchSetSessionPrice = (price) => {
    dispatch(setSessionPrice(price));
  };

  const dispatchSetSessionType = (sessionType) => {
    dispatch(setSessionType(sessionType));
  };

  const dispatchResetSessionTypeAndPrice = () => {
    dispatch(resetSessionTypeAndPrice());
  };

  const dispatchResetBookSessionState = () => {
    dispatch(resetBookSessionState());
  };

  return {
    handleSetChildrenSelectedForBookingChange,
    dispatchSetSessionPrice,
    dispatchSetSessionType,
    dispatchResetSessionTypeAndPrice,
    dispatchResetBookSessionState,
  };
};

export default useBookSessionActions;
