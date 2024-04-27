import { useDispatch } from "react-redux";

import useFireSwal from "../../use-fire-swal";
import useHamburgerHandlerNavigate from "../../use-hamburger-handler-navigate";
import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";

import { sendEmailBookingNotAddedToDatabaseAsync } from "../../../store/send-email/send-email.thunks";

import {
  bookedSessionsUserRoute,
  contactRoute,
} from "../../../strings/routes/routes-strings";
import { failedToSendEmailInstructions } from "../../../strings/errors/errors-strings";

import { createChildrenToAddToBooking } from "../../../functions/create-children-to-add-to-booking";

const useSendAddBookingInfoErrorEmailThunk = () => {
  const { name, appOwnerEmail, phoneNumber, id, email } =
    useGetCurrentUserSelectors();
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const dispatch = useDispatch();

  const sendAddBookingInfoErrorEmailThunk = (
    date,
    sessionType,
    childrenSelectedForBooking,
    usersChildren
  ) => {
    dispatch(
      sendEmailBookingNotAddedToDatabaseAsync({
        appOwnerEmail,
        date,
        sessionType,
        childrenInBooking: createChildrenToAddToBooking(
          childrenSelectedForBooking,
          usersChildren
        ),
        parentName: name,
        parentPhoneNumber: phoneNumber,
        parentsUserId: id,
        parentEmail: email,
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

  return { sendAddBookingInfoErrorEmailThunk };
};

export default useSendAddBookingInfoErrorEmailThunk;
