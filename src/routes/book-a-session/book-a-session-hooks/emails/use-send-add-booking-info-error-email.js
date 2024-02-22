import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { selectGetUsersChildrenSelectors } from "../../../../store/get-users-children/get-users-children.slice";
import { selectEnvironmentVariables } from "../../../../store/user/user.selector";
import { sendEmailBookingNotAddedToDatabaseAsync } from "../../../../store/send-email/send-email.thunks";
import { selectBookSessionSelectors } from "../../../../store/book-session/book-session.slice";

import {
  contactRoute,
  failedToSendEmailInstructions,
  userBookingsRoute,
} from "../../../../strings/strings";

import { createChildrenToAddToBooking } from "../../../../functions/create-children-to-add-to-booking";

const useSendAddBookingInfoErrorEmail = (date) => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const { sessionType, childrenSelectedForBooking } = useSelector(
    selectBookSessionSelectors
  );
  const { usersChildren } = useSelector(selectGetUsersChildrenSelectors);
  const envVariables = useSelector(selectEnvironmentVariables);
  const dispatch = useDispatch();

  const childName =
    usersChildren && usersChildren[0] !== undefined
      ? usersChildren[0].childName
      : "";
  const parentEmail =
    usersChildren && usersChildren[0] !== undefined
      ? usersChildren[0].parentEmail
      : "";
  const parentName =
    usersChildren && usersChildren[0] !== undefined
      ? usersChildren[0].parentName
      : "";

  const oneChildChosen = childrenSelectedForBooking.join(" ");
  const namesToAddToBooking = childrenSelectedForBooking.join(", ");
  const { appOwnerEmail } = envVariables;

  const childrenInBooking = createChildrenToAddToBooking(
    childrenSelectedForBooking,
    childName,
    oneChildChosen,
    namesToAddToBooking
  );

  const sendAddBookingInfoErrorEmail = () => {
    dispatch(
      sendEmailBookingNotAddedToDatabaseAsync({
        appOwnerEmail,
        date,
        sessionType,
        childrenInBooking,
        parentEmail,
        parentName,
      })
    ).then((resultAction) => {
      if (
        sendEmailBookingNotAddedToDatabaseAsync.fulfilled.match(resultAction)
      ) {
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
    });
  };

  return { sendAddBookingInfoErrorEmail };
};

export default useSendAddBookingInfoErrorEmail;
