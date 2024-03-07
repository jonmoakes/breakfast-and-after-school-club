import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useFireErrorSwals from "./use-fire-error-swals";
import useCancelBookingErrorLogic from "./use-cancel-booking-error-logic";

import { addUserBookingToDelete } from "../../../store/user-booking-to-delete/user-booking-to-delete.slice";

import { cancelBookingRoute } from "../../../strings/strings";

const useCheckDateAndGoToCancelBookingRoute = (chosenEntry) => {
  const {
    bookingIsInThePast,
    isCurrentDateAfterMorningSessionCutOffTime,
    isCurrentDateAndIsAfterAfternoonSessionCutOffTime,
  } = useCancelBookingErrorLogic(chosenEntry);
  const {
    cantCancelPastBookingSwal,
    cantCancelMorningSessionSwal,
    cantCancelAfternoonSessionSwal,
  } = useFireErrorSwals();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkDateAndGoToCancelBookingRoute = () => {
    const chosenEntryDate = chosenEntry[0] ? chosenEntry[0].date : "";

    if (!chosenEntryDate) return;
    if (bookingIsInThePast()) {
      cantCancelPastBookingSwal();
    } else if (isCurrentDateAfterMorningSessionCutOffTime()) {
      cantCancelMorningSessionSwal();
    } else if (isCurrentDateAndIsAfterAfternoonSessionCutOffTime()) {
      cantCancelAfternoonSessionSwal();
    } else {
      dispatch(addUserBookingToDelete(chosenEntry));
      navigate(cancelBookingRoute);
    }
  };

  return { checkDateAndGoToCancelBookingRoute };
};

export default useCheckDateAndGoToCancelBookingRoute;
