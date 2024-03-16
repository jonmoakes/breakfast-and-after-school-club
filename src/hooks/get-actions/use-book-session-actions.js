import { useDispatch } from "react-redux";

import {
  setChildrenSelectedForBooking,
  setSessionPrice,
  setSessionType,
} from "../../store/book-session/book-session.slice";
import { resetSessionDocAsync } from "../../store/book-session/book-session.thunks";

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

  const dispatchResetSessionDocAsync = (
    childrenSelectedForBooking,
    date,
    databaseId,
    collectionId,
    sessionType
  ) => {
    dispatch(
      resetSessionDocAsync({
        childrenSelectedForBooking,
        date,
        databaseId,
        collectionId,
        sessionType,
      })
    );
  };

  return {
    handleSetChildrenSelectedForBookingChange,
    dispatchSetSessionPrice,
    dispatchSetSessionType,
    dispatchResetSessionDocAsync,
  };
};

export default useBookSessionActions;
