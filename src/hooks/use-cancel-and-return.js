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

  const cancelAndReturn = () => {
    switch (path) {
      case deleteChildInfoRoute:
        dispatch(resetChildToDeleteInfo());
        navigate(-1);
        break;
      case editChildInfoRoute:
        dispatch(resetChildToEditInfo());
        navigate(-1);
        break;
      case chosenEntryChildDetailsRoute:
        dispatch(resetChosenEntryChildDetailsState());
        navigate(-1);
        break;
      case cancelBookingRoute:
        dispatch(resetUserBookingToDeleteState());
        navigate(-1);
        break;
      default:
        navigate(-1);
    }
  };

  return { cancelAndReturn };
};
export default useCancelAndReturn;
