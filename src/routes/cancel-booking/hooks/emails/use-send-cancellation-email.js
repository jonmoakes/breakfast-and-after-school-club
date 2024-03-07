import { useSelector, useDispatch } from "react-redux";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";
import useGetRefundPrice from "../use-get-refund-price";

import { selectCurrentUserSelectors } from "../../../../store/user/user.slice";
import { selectUserBookingToDeleteSelectors } from "../../../../store/user-booking-to-delete/user-booking-to-delete.slice";
import { sendEmailBookingCancellationConfirmationAsync } from "../../../../store/send-email/send-email.thunks";
import { selectGetUsersChildrenSelectors } from "../../../../store/get-users-children/get-users-children.slice";

import { errorSendCancellationConfirmationEmailMessage } from "../../../../strings/errors/errors-strings";
import { bookedSessionsUserRoute } from "../../../../strings/routes/routes-strings";

const useSendCancellationEmail = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  let { refundPrice, totalRefundPrice } = useGetRefundPrice();

  const { currentUser } = useSelector(selectCurrentUserSelectors);
  const { userBookingToDelete } = useSelector(
    selectUserBookingToDeleteSelectors
  );
  const { usersChildren } = useSelector(selectGetUsersChildrenSelectors);

  const dispatch = useDispatch();

  const { name, email } = currentUser;
  const { date, sessionType, childrensName } = userBookingToDelete || {};
  refundPrice = usersChildren.length === 1 ? refundPrice : totalRefundPrice;

  const sendCancellationEmail = () => {
    dispatch(
      sendEmailBookingCancellationConfirmationAsync({
        email,
        name,
        date,
        sessionType,
        childrensName,
        refundPrice,
      })
    ).then((resultAction) => {
      if (
        sendEmailBookingCancellationConfirmationAsync.fulfilled.match(
          resultAction
        )
      ) {
        hamburgerHandlerNavigate(bookedSessionsUserRoute);
      } else {
        fireSwal(
          "error",
          errorSendCancellationConfirmationEmailMessage,
          "",
          0,
          true,
          false
        ).then((isConfirmed) => {
          if (isConfirmed) {
            //don't need to do anything else as swal tells user to contact if they need the confirmation email.
            hamburgerHandlerNavigate(bookedSessionsUserRoute);
          }
        });
      }
    });
  };

  return { sendCancellationEmail };
};

export default useSendCancellationEmail;
