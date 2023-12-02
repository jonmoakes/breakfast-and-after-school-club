import { useSelector, useDispatch } from "react-redux";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useResetStateAndNavigate from "../return-logic-and-reset-state/use-reset-state-and-navigate";
import useGetRefundPrice from "../use-get-refund-price";

import { selectUserBookingToDelete } from "../../../../store/user-booking-to-delete/user-booking-to-delete.selector";
import { selectCurrentUser } from "../../../../store/user/user.selector";
import { setContactFormDetailsWhenBookingError } from "../../../../store/contact-form/contact-form.slice";

import {
  bookingCancelledButBalanceUpdateError,
  contactFormDetailsPrePopulatedMessage,
  contactRoute,
} from "../../../../strings/strings";

const useUpdateSessionSpacesAndBalanceErrorSwal = () => {
  const { fireSwal } = useFireSwal();
  const { resetStateAndNavigate } = useResetStateAndNavigate();
  const { numberOfChildrenInBooking } = useGetRefundPrice();

  const userBookingToDelete = useSelector(selectUserBookingToDelete);
  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch();
  const { date, sessionType } = userBookingToDelete || {};
  const { name, email } = currentUser;

  const dataToSendToContactForm = {
    name,
    email,
    message: `Booking cancellation result - Success.\n\nSession Spaces Update result: Fail.\n\nBooking Details:\n\nDate: ${date}\n\nSession Type: ${sessionType}\n\nspaces to update: ${numberOfChildrenInBooking}\n\nbalance to update: session type price * ${numberOfChildrenInBooking} `,
  };

  const updateSessionSpacesAndBalanceErrorSwal = () => {
    fireSwal(
      "error",
      bookingCancelledButBalanceUpdateError,
      contactFormDetailsPrePopulatedMessage,
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatch(
          setContactFormDetailsWhenBookingError(dataToSendToContactForm)
        );
        resetStateAndNavigate(contactRoute);
      }
    });
  };

  return { updateSessionSpacesAndBalanceErrorSwal };
};

export default useUpdateSessionSpacesAndBalanceErrorSwal;
