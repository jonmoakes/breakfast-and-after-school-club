import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import useChosenEntryChildDetailsActions from "../hooks/get-actions-and-thunks/chosen-entry-child-details-actions-and-thunks/use-chosen-entry-child-details-actions";
import useDeleteChildInfoActions from "../hooks/get-actions-and-thunks/delete-child-info-actions-and-thunks/use-delete-child-info-actions";

import { resetChildToEditInfo } from "../store/edit-child-info/edit-child-info.slice";
import { resetUserBookingToDeleteState } from "../store/user-booking-to-delete/user-booking-to-delete.slice";

import {
  cancelBookingRoute,
  chosenEntryChildDetailsRoute,
  deleteChildInfoRoute,
  editChildInfoRoute,
} from "../strings/routes/routes-strings";

const useCancelAndReturn = () => {
  const { dispatchResetChosenEntryChildDetailsState } =
    useChosenEntryChildDetailsActions();
  const { dispatchResetChildToDeleteInfo } = useDeleteChildInfoActions();

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
        dispatchResetChildToDeleteInfo();
        goBackMinusOne();
        break;
      case editChildInfoRoute:
        dispatch(resetChildToEditInfo());
        goBackMinusOne();
        break;
      case chosenEntryChildDetailsRoute:
        dispatchResetChosenEntryChildDetailsState();
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
