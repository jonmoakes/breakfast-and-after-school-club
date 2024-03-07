import { useDispatch, useSelector } from "react-redux";

import useGetRefundPrice from "../use-get-refund-price";
import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { sendEmailBalanceNotUpdatedErrorAsync } from "../../../../store/send-email/send-email.thunks";
import { selectCurrentUserSelectors } from "../../../../store/user/user.slice";

import {
  contactRoute,
  failedToSendEmailInstructions,
  bookedSessionsUserRoute,
} from "../../../../strings/strings";

const useSendBalanceNotUpdatedErrorEmail = () => {
  const { refundPrice, totalRefundPrice, numberOfChildrenInBooking } =
    useGetRefundPrice();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { fireSwal } = useFireSwal();

  const { currentUser, currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );
  const dispatch = useDispatch();

  const { id } = currentUser;
  const { appOwnerEmail } = currentUserEnvironmentVariables;

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
