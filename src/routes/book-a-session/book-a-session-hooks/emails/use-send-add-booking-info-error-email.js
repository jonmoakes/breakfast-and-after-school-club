import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { selectGetUsersChildrenSelectors } from "../../../../store/get-users-children/get-users-children.slice";
import { selectCurrentUserSelectors } from "../../../../store/user/user.slice";
import { sendEmailBookingNotAddedToDatabaseAsync } from "../../../../store/send-email/send-email.thunks";
import { selectBookSessionSelectors } from "../../../../store/book-session/book-session.slice";

import {
  contactRoute,
  failedToSendEmailInstructions,
  bookedSessionsUserRoute,
} from "../../../../strings/strings";

import { createChildrenToAddToBooking } from "../../../../functions/create-children-to-add-to-booking";

const useSendAddBookingInfoErrorEmail = (date) => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const { sessionType, childrenSelectedForBooking } = useSelector(
    selectBookSessionSelectors
  );
  const { usersChildren } = useSelector(selectGetUsersChildrenSelectors);
  const { currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );
  const dispatch = useDispatch();

  const parentEmail =
    usersChildren && usersChildren[0] !== undefined
      ? usersChildren[0].parentEmail
      : "";

  const parentName =
    usersChildren && usersChildren[0] !== undefined
      ? usersChildren[0].parentName
      : "";

  const { appOwnerEmail } = currentUserEnvironmentVariables;

  const sendAddBookingInfoErrorEmail = () => {
    dispatch(
      sendEmailBookingNotAddedToDatabaseAsync({
        appOwnerEmail,
        date,
        sessionType,
        childrenInBooking: createChildrenToAddToBooking(
          childrenSelectedForBooking,
          usersChildren
        ),
        parentEmail,
        parentName,
      })
    ).then((resultAction) => {
      if (
        sendEmailBookingNotAddedToDatabaseAsync.fulfilled.match(resultAction)
      ) {
        hamburgerHandlerNavigate(bookedSessionsUserRoute);
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
