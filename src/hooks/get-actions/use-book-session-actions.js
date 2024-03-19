import { useDispatch } from "react-redux";

import {
  resetBookSessionState,
  setChildrenSelectedForBooking,
  setSessionPrice,
  setSessionType,
} from "../../store/book-session/book-session.slice";

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

  const dispatchResetBookSessionState = () => {
    dispatch(resetBookSessionState());
  };

  return {
    handleSetChildrenSelectedForBookingChange,
    dispatchSetSessionPrice,
    dispatchSetSessionType,
    dispatchResetBookSessionState,
  };
};

export default useBookSessionActions;
