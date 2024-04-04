import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import useGetUserBookingToDeleteSelectors from "../../get-selectors/use-get-user-booking-to-delete-selectors";
import useSendEmailActions from "./use-send-email-actions";
import useHamburgerHandlerNavigate from "../../use-hamburger-handler-navigate";
import useFireSwal from "../../use-fire-swal";

import { sendEmailResetSessionSpacesAndBalanceErrorAsync } from "../../../store/send-email/send-email.thunks";

import {
  bookedSessionsUserRoute,
  contactRoute,
} from "../../../strings/routes/routes-strings";
import { failedToSendEmailInstructions } from "../../../strings/errors/errors-strings";

const useSendSessionSpacesAndBalanceErrorEmailThunk = () => {
  const { id, appOwnerEmail } = useGetCurrentUserSelectors();
  const { userBookingToDelete } = useGetUserBookingToDeleteSelectors();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { fireSwal } = useFireSwal();
  const { dispatchResetSendEmailState } = useSendEmailActions();

  const { date, sessionType } = userBookingToDelete || {};

  const dispatch = useDispatch();

  const sendSessionSpacesAndBalanceErrorEmailThunk = (
    numberOfChildrenInBooking,
    refundPrice
  ) => {
    dispatch(
      sendEmailResetSessionSpacesAndBalanceErrorAsync({
        appOwnerEmail,
        date,
        sessionType,
        numberOfChildrenInBooking,
        id,
        refundPrice,
      })
    ).then((resultAction) => {
      if (
        sendEmailResetSessionSpacesAndBalanceErrorAsync.fulfilled.match(
          resultAction
        )
      ) {
        dispatchResetSendEmailState();
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
            dispatchResetSendEmailState();
            hamburgerHandlerNavigate(contactRoute);
          }
        });
      }
    });
  };

  return { sendSessionSpacesAndBalanceErrorEmailThunk };
};

export default useSendSessionSpacesAndBalanceErrorEmailThunk;
