import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";
import useSelectBookSessionSelectors from "../select-book-session-selectors/use-select-book-session-selectors";
import useCurrentUserSelectors from "../../../../hooks/get-selectors/use-current-user-selectors";

import { selectGetUsersChildrenSelectors } from "../../../../store/get-users-children/get-users-children.slice";
import { sendEmailBookingNotAddedToDatabaseAsync } from "../../../../store/send-email/send-email.thunks";

import {
  contactRoute,
  bookedSessionsUserRoute,
} from "../../../../strings/routes/routes-strings";
import { failedToSendEmailInstructions } from "../../../../strings/errors/errors-strings";

import { createChildrenToAddToBooking } from "../../../../functions/create-children-to-add-to-booking";

const useSendAddBookingInfoErrorEmail = (date) => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { sessionType, childrenSelectedForBooking } =
    useSelectBookSessionSelectors();
  const { name, email, appOwnerEmail } = useCurrentUserSelectors();

  const { usersChildren } = useSelector(selectGetUsersChildrenSelectors);

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
