import { useDispatch } from "react-redux";

import useDatesLogic from "../dates-logic/use-dates-logic";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";
import useFireSwal from "../../../../hooks/use-fire-swal";
import useCurrentUserSelectors from "../../../../hooks/get-selectors/use-current-user-selectors";
import useSelectBookSessionSelectors from "../select-book-session-selectors/use-select-book-session-selectors";

import { sendEmailResetSessionSpacesErrorAsync } from "../../../../store/send-email/send-email.thunks";

import { failedToSendEmailInstructions } from "../../../../strings/errors/errors-strings";
import {
  bookSessionRoute,
  contactRoute,
} from "../../../../strings/routes/routes-strings";

const useSendResetSessionSpacesErrorEmail = () => {
  const { date } = useDatesLogic();

  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { fireSwal } = useFireSwal();
  const { sessionType, numberOfSpacesToAdd } = useSelectBookSessionSelectors();
  const { appOwnerEmail } = useCurrentUserSelectors();

  const dispatch = useDispatch();

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
