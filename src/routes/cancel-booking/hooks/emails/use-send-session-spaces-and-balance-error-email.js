import { useSelector, useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../../hooks/get-selectors/use-get-current-user-selectors";
import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";
import useGetRefundPrice from "../use-get-refund-price";

import { selectUserBookingToDeleteSelectors } from "../../../../store/user-booking-to-delete/user-booking-to-delete.slice";
import { sendEmailResetSessionSpacesAndBalanceErrorAsync } from "../../../../store/send-email/send-email.thunks";

import {
  contactRoute,
  bookedSessionsUserRoute,
} from "../../../../strings/routes/routes-strings";
import { failedToSendEmailInstructions } from "../../../../strings/errors/errors-strings";

const useSendSessionSpacesAndBalanceErrorEmail = () => {
  const { id, appOwnerEmail } = useGetCurrentUserSelectors();
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  let { refundPrice, numberOfChildrenInBooking, totalRefundPrice } =
    useGetRefundPrice();

  const { userBookingToDelete } = useSelector(
    selectUserBookingToDeleteSelectors
  );

  const dispatch = useDispatch();

  const { date, sessionType } = userBookingToDelete || {};

  const refundAmount =
    numberOfChildrenInBooking > 1 ? totalRefundPrice : refundPrice;

  const sendSessionSpacesAndBalanceErrorEmail = () => {
    dispatch(
      sendEmailResetSessionSpacesAndBalanceErrorAsync({
        appOwnerEmail,
        date,
        sessionType,
        numberOfChildrenInBooking,
        id,
        refundAmount,
      })
    ).then((resultAction) => {
      if (
        sendEmailResetSessionSpacesAndBalanceErrorAsync.fulfilled.match(
          resultAction
        )
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

  return { sendSessionSpacesAndBalanceErrorEmail };
};

export default useSendSessionSpacesAndBalanceErrorEmail;
