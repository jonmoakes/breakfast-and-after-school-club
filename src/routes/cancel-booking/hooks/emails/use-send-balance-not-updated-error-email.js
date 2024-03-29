import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../../hooks/get-selectors/use-get-current-user-selectors";
import useGetRefundPrice from "../use-get-refund-price";
import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { sendEmailBalanceNotUpdatedErrorAsync } from "../../../../store/send-email/send-email.thunks";

import {
  contactRoute,
  bookedSessionsUserRoute,
} from "../../../../strings/routes/routes-strings";
import { failedToSendEmailInstructions } from "../../../../strings/errors/errors-strings";

const useSendBalanceNotUpdatedErrorEmail = () => {
  const { id, appOwnerEmail } = useGetCurrentUserSelectors();
  const { refundPrice, totalRefundPrice, numberOfChildrenInBooking } =
    useGetRefundPrice();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { fireSwal } = useFireSwal();

  const dispatch = useDispatch();

  const refundAmount =
    numberOfChildrenInBooking > 1 ? totalRefundPrice : refundPrice;

  const sendBalanceNotUpdatedErrorEmail = () => {
    dispatch(
      sendEmailBalanceNotUpdatedErrorAsync({ appOwnerEmail, id, refundAmount })
    ).then((resultAction) => {
      if (sendEmailBalanceNotUpdatedErrorAsync.fulfilled.match(resultAction)) {
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

  return { sendBalanceNotUpdatedErrorEmail };
};

export default useSendBalanceNotUpdatedErrorEmail;
