import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import {
  selectChildrenSelectedForBooking,
  selectSessionType,
} from "../../../../store/book-session/book-session.selector";
import { selectUsersChildren } from "../../../../store/get-users-children/get-users-children.selector";
import { selectEnvironmentVariables } from "../../../../store/user/user.selector";
import { sendEmailWithErrorAsync } from "../../../../store/send-email/send-email-thunks";

import {
  contactRoute,
  failedToSendEmailInstructions,
  userBookingsRoute,
} from "../../../../strings/strings";

import { createChildrenToAddToBooking } from "../../../../functions/create-children-to-add-to-booking";

const useSendAddBookingInfoErrorEmail = (date) => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const childrenSelectedForBooking = useSelector(
    selectChildrenSelectedForBooking
  );
  const sessionType = useSelector(selectSessionType);
  const usersChildren = useSelector(selectUsersChildren);
  const envVariables = useSelector(selectEnvironmentVariables);
  const dispatch = useDispatch();

  const childName = usersChildren.length ? usersChildren[0].childName : "";
  const parentEmail = usersChildren.length ? usersChildren[0].parentEmail : "";
  const parentName = usersChildren.length ? usersChildren[0].parentName : "";
  const oneChildChosen = childrenSelectedForBooking.join(" ");
  const namesToAddToBooking = childrenSelectedForBooking.join(", ");
  const { appOwnerEmail } = envVariables;

  const childrenInBooking = createChildrenToAddToBooking(
    childrenSelectedForBooking,
    childName,
    oneChildChosen,
    namesToAddToBooking
  );

  const subject =
    "Breakfast & After School Club - A Booking Was Not Added To The Database.";

  const message = `Error Adding The Following Booking To The Database. Please Add Manually.\n_____________\n\nSession Booking Data:\n\nDate:\n${date}\n\nSession:\n${sessionType}\n\nChildren In Booking:\n${childrenInBooking}\n\nParent Email:\n${parentEmail}\n\nParent Name:\n${parentName}`;

  const sendAddBookingInfoErrorEmail = () => {
    dispatch(sendEmailWithErrorAsync({ appOwnerEmail, subject, message })).then(
      (resultAction) => {
        if (sendEmailWithErrorAsync.fulfilled.match(resultAction)) {
          hamburgerHandlerNavigate(userBookingsRoute);
        } else {
          fireSwal(
            "error",
            failedToSendEmailInstructions,
            "",
            0,
            true,
            false
          ).then((isConfirmed) => {
            if (isConfirmed) {
              hamburgerHandlerNavigate(contactRoute);
            }
          });
        }
      }
    );
  };

  return { sendAddBookingInfoErrorEmail };
};

export default useSendAddBookingInfoErrorEmail;
