import { useDispatch, useSelector } from "react-redux";

import useConditionalLogic from "../use-conditional-logic";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";
import useFireSwal from "../../../../hooks/use-fire-swal";

import {
  selectChildrenSelectedForBooking,
  selectSessionType,
} from "../../../../store/book-session/book-session.slice";
import { selectEnvironmentVariables } from "../../../../store/user/user.selector";
import { sendEmailResetSessionSpacesErrorAsync } from "../../../../store/send-email/send-email-thunks";

import {
  bookSessionRoute,
  contactRoute,
  failedToSendEmailInstructions,
} from "../../../../strings/strings";

const useSendResetSessionSpacesErrorEmail = () => {
  const { date } = useConditionalLogic();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { fireSwal } = useFireSwal();

  const childrenSelectedForBooking = useSelector(
    selectChildrenSelectedForBooking
  );
  const sessionType = useSelector(selectSessionType);
  const envVariables = useSelector(selectEnvironmentVariables);
  const dispatch = useDispatch();

  const numberOfSpacesToAdd = childrenSelectedForBooking.length
    ? childrenSelectedForBooking.length
    : 1;
  const { appOwnerEmail } = envVariables;

  const sendResetSessionSpacesErrorEmail = () => {
    dispatch(
      sendEmailResetSessionSpacesErrorAsync({
        appOwnerEmail,
        date,
        sessionType,
        numberOfSpacesToAdd,
      })
    ).then((resultAction) => {
      if (sendEmailResetSessionSpacesErrorAsync.fulfilled.match(resultAction)) {
        hamburgerHandlerNavigate(bookSessionRoute);
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

  return { sendResetSessionSpacesErrorEmail };
};

export default useSendResetSessionSpacesErrorEmail;
