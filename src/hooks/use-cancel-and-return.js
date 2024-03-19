import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { resetChildToDeleteInfo } from "../store/delete-child-info/delete-child-info.slice";
import { resetChildToEditInfo } from "../store/edit-child-info/edit-child-info.slice";
import { resetChosenEntryChildDetailsState } from "../store/chosen-entry-child-details/chosen-entry-child-details.slice";
import { resetUserBookingToDeleteState } from "../store/user-booking-to-delete/user-booking-to-delete.slice";

import {
  cancelBookingRoute,
  chosenEntryChildDetailsRoute,
  deleteChildInfoRoute,
  editChildInfoRoute,
} from "../strings/routes/routes-strings";

const useCancelAndReturn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const path = location.pathname;

  const goBackMinusOne = () => {
    navigate(-1);
  };

  const cancelAndReturn = () => {
    switch (path) {
      case deleteChildInfoRoute:
        dispatch(resetChildToDeleteInfo());
        goBackMinusOne();
        break;
      case editChildInfoRoute:
        dispatch(resetChildToEditInfo());
        goBackMinusOne();
        break;
      case chosenEntryChildDetailsRoute:
        dispatch(resetChosenEntryChildDetailsState());
        goBackMinusOne();
        break;
      case cancelBookingRoute:
        dispatch(resetUserBookingToDeleteState());
        goBackMinusOne();
        break;
      default:
        goBackMinusOne();
    }
  };

  return { cancelAndReturn };
};
export default useCancelAndReturn;
