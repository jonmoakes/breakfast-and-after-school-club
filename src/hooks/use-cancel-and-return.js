import { useNavigate, useLocation } from "react-router-dom";

import useChosenEntryChildDetailsActions from "../hooks/get-actions-and-thunks/chosen-entry-child-details-actions-and-thunks/use-chosen-entry-child-details-actions";
import useDeleteChildInfoActions from "../hooks/get-actions-and-thunks/delete-child-info-actions-and-thunks/use-delete-child-info-actions";
import useEditChildInfoActions from "../hooks/get-actions-and-thunks/edit-child-info-actions-and-thunks/use-edit-child-info-actions";
import useUserBookingToDeleteActions from "../hooks/get-actions-and-thunks/user-booking-to-delete-actions-and-thunks/use-user-booking-to-delete-actions";

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
  const { dispatchResetChildToEditInfo } = useEditChildInfoActions();
  const { dispatchResetUserBookingToDeleteState } =
    useUserBookingToDeleteActions();

  const navigate = useNavigate();
  const location = useLocation();

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
        dispatchResetChildToEditInfo();
        goBackMinusOne();
        break;
      case chosenEntryChildDetailsRoute:
        dispatchResetChosenEntryChildDetailsState();
        goBackMinusOne();
        break;
      case cancelBookingRoute:
        dispatchResetUserBookingToDeleteState();
        goBackMinusOne();
        break;
      default:
        goBackMinusOne();
    }
  };

  return { cancelAndReturn };
};
export default useCancelAndReturn;
