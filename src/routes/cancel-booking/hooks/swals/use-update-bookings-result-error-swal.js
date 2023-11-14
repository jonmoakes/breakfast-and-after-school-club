import { useSelector, useDispatch } from "react-redux";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useResetStateAndNavigate from "../return-logic-and-reset-state/use-reset-state-and-navigate";

import { selectUpdateBookingsDoc } from "../../../../store/user-booking-to-delete/user-booking-to-delete.selector";
import { selectCurrentUser } from "../../../../store/user/user.selector";
import { setContactFormDetailsWhenBookingError } from "../../../../store/contact-form/contact-form.slice";

import {
  contactRoute,
  errorInstructions,
  errorCancellingBookingMessage,
} from "../../../../strings/strings";

const useUpdateBookingsResultErrorSwal = () => {
  const { fireSwal } = useFireSwal();
  const { resetStateAndNavigate } = useResetStateAndNavigate();

  const updateBookingsDoc = useSelector(selectUpdateBookingsDoc);
  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch();
  const { name, email } = currentUser;
  const error = updateBookingsDoc.error;

  const errorToSend = {
    name,
    email,
    message: `Booking cancellation result - Failure.\n\nError Received:\n${error}`,
  };

  const updateBookingsResultErrorSwal = () => {
    fireSwal(
      "error",
      errorCancellingBookingMessage,
      errorInstructions,
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatch(setContactFormDetailsWhenBookingError(errorToSend));
        resetStateAndNavigate(contactRoute);
      }
    });
  };

  return { updateBookingsResultErrorSwal };
};

export default useUpdateBookingsResultErrorSwal;
