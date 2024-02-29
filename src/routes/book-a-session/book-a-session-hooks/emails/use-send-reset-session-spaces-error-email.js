import { useDispatch, useSelector } from "react-redux";

import useConditionalLogic from "../use-conditional-logic";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";
import useFireSwal from "../../../../hooks/use-fire-swal";

import { selectBookSessionSelectors } from "../../../../store/book-session/book-session.slice";
import { selectCurrentUserSelectors } from "../../../../store/user/user.slice";
import { sendEmailResetSessionSpacesErrorAsync } from "../../../../store/send-email/send-email.thunks";

import {
  bookSessionRoute,
  contactRoute,
  failedToSendEmailInstructions,
} from "../../../../strings/strings";

const useSendResetSessionSpacesErrorEmail = () => {
  const { date } = useConditionalLogic();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { fireSwal } = useFireSwal();

  const { sessionType, childrenSelectedForBooking } = useSelector(
    selectBookSessionSelectors
  );
  const { currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );
  const dispatch = useDispatch();

  const numberOfSpacesToAdd = childrenSelectedForBooking.length
    ? childrenSelectedForBooking.length
    : 1;
  const { appOwnerEmail } = currentUserEnvironmentVariables;

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
