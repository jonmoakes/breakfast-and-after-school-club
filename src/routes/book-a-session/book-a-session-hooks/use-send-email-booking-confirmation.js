import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useFireSwal from "../../../hooks/use-fire-swal";

import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectRequestDateData } from "../../../store/request-date-data/request-date-data.selector";
import {
  selectSessionType,
  selectChildrenSelectedForBooking,
} from "../../../store/book-session/book-session.selector";
import { selectUsersChildren } from "../../../store/get-users-children/get-users-children.selector";
import { sendEmailBookingConfirmationAsync } from "../../../store/send-email/send-email.slice";

import {
  accountRoute,
  errorSendingBookingConfirmationEmail,
  getBookingInfoEmailInstructions,
} from "../../../strings/strings";

const useSendEmailBookingConfirmation = () => {
  const { fireSwal } = useFireSwal();

  const currentUser = useSelector(selectCurrentUser);
  const requestDateData = useSelector(selectRequestDateData);
  const sessionType = useSelector(selectSessionType);
  const childrenSelectedForBooking = useSelector(
    selectChildrenSelectedForBooking
  );
  const usersChildren = useSelector(selectUsersChildren);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { name, email } = currentUser;
  const date = requestDateData ? requestDateData.date : "";
  const childName = usersChildren[0] ? usersChildren[0].childName : "";
  const oneChildChosen = childrenSelectedForBooking.join(" ");
  const namesToAddToBooking = childrenSelectedForBooking.join(", ");

  const childrenInBooking = !childrenSelectedForBooking.length
    ? childName
    : childrenSelectedForBooking.length === 1
    ? oneChildChosen
    : childrenSelectedForBooking.length > 1
    ? namesToAddToBooking
    : childrenSelectedForBooking;

  const subject = "Your Breakfast & After School Club Booking Confirmation";

  const sendEmailConfirmation = () => {
    dispatch(
      sendEmailBookingConfirmationAsync({
        email,
        subject,
        name,
        date,
        sessionType,
        childrenInBooking,
      })
    ).then((resultAction) => {
      if (sendEmailBookingConfirmationAsync.fulfilled.match(resultAction)) {
        navigate(accountRoute);
      } else {
        fireSwal(
          "error",
          errorSendingBookingConfirmationEmail,
          getBookingInfoEmailInstructions,
          0,
          true,
          false
        ).then((isConfirmed) => {
          if (isConfirmed) {
            navigate(accountRoute);
          }
        });
      }
    });
  };

  return { sendEmailConfirmation };
};

export default useSendEmailBookingConfirmation;
