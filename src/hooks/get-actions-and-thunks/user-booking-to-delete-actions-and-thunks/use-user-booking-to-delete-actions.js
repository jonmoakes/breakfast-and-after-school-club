import { useDispatch } from "react-redux";

import {
  addUserBookingToDelete,
  resetUserBookingToDeleteState,
} from "../../../store/user-booking-to-delete/user-booking-to-delete.slice";

const useUserBookingToDeleteActions = () => {
  const dispatch = useDispatch();

  const dispatchAddUserBookingToDelete = (chosenEntry) => {
    dispatch(addUserBookingToDelete(chosenEntry));
  };

  const dispatchResetUserBookingToDeleteState = () => {
    dispatch(resetUserBookingToDeleteState());
  };

  return {
    dispatchAddUserBookingToDelete,
    dispatchResetUserBookingToDeleteState,
  };
};

export default useUserBookingToDeleteActions;
