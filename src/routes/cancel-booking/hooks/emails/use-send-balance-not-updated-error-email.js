import { useDispatch, useSelector } from "react-redux";

import useGetRefundPrice from "../use-get-refund-price";
import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { sendEmailBalanceNotUpdatedErrorAsync } from "../../../../store/send-email/send-email-thunks";
import {
  selectCurrentUser,
  selectEnvironmentVariables,
} from "../../../../store/user/user.selector";

import {
  contactRoute,
  failedToSendEmailInstructions,
  userBookingsRoute,
} from "../../../../strings/strings";

const useSendBalanceNotUpdatedErrorEmail = () => {
  const { refundPrice, totalRefundPrice, numberOfChildrenInBooking } =
    useGetRefundPrice();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { fireSwal } = useFireSwal();

  const currentUser = useSelector(selectCurrentUser);
  const envVariables = useSelector(selectEnvironmentVariables);

  const dispatch = useDispatch();

  const { id } = currentUser;
  const { appOwnerEmail } = envVariables;

  const refundAmount =
    numberOfChildrenInBooking > 1 ? totalRefundPrice : refundPrice;

  const sendBalanceNotUpdatedErrorEmail = () => {
    dispatch(
      sendEmailBalanceNotUpdatedErrorAsync({ appOwnerEmail, id, refundAmount })
    ).then((resultAction) => {
      if (sendEmailBalanceNotUpdatedErrorAsync.fulfilled.match(resultAction)) {
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

  return { sendBalanceNotUpdatedErrorEmail };
};

export default useSendBalanceNotUpdatedErrorEmail;
