import { useDispatch } from "react-redux";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";
import useGetBookSessionSelectors from "../../../../hooks/get-selectors/use-get-book-session-selectors";
import useGetCurrentUserSelectors from "../../../../hooks/get-selectors/use-get-current-user-selectors";

import { sendEmailBookingNotAddedToDatabaseAsync } from "../../../../store/send-email/send-email.thunks";

import {
  contactRoute,
  bookedSessionsUserRoute,
} from "../../../../strings/routes/routes-strings";
import { failedToSendEmailInstructions } from "../../../../strings/errors/errors-strings";

import { createChildrenToAddToBooking } from "../../../../functions/create-children-to-add-to-booking";
import useGetUsersChildrenSelectors from "../../../../hooks/get-selectors/use-get-users-children-selectors";

const useSendAddBookingInfoErrorEmail = (date) => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { sessionType, childrenSelectedForBooking } =
    useGetBookSessionSelectors();
  const { name, email, appOwnerEmail } = useGetCurrentUserSelectors();
  const { usersChildren } = useGetUsersChildrenSelectors();

  const dispatch = useDispatch();

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
        parentEmail: email,
        parentName: name,
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
