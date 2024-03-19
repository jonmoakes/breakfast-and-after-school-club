import { useDispatch } from "react-redux";

import useDatesLogic from "../logic/use-dates-logic";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";
import useFireSwal from "../../../../hooks/use-fire-swal";
import useGetCurrentUserSelectors from "../../../../hooks/get-selectors/use-get-current-user-selectors";
import useSessionLogic from "../logic/use-session-logic";

import { sendEmailResetSessionSpacesErrorAsync } from "../../../../store/send-email/send-email.thunks";

import { failedToSendEmailInstructions } from "../../../../strings/errors/errors-strings";
import {
  bookSessionRoute,
  contactRoute,
} from "../../../../strings/routes/routes-strings";

const useSendResetSessionSpacesErrorEmail = () => {
  const { date } = useDatesLogic();
  const { numberOfSpacesToAdd } = useSessionLogic();

  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { fireSwal } = useFireSwal();
  const { sessionType } = useSessionLogic();
  const { appOwnerEmail } = useGetCurrentUserSelectors();

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
