import { useDispatch } from "react-redux";

import useHamburgerHandlerNavigate from "../../use-hamburger-handler-navigate";
import useFireSwal from "../../use-fire-swal";
import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";

import { sendEmailBalanceNotUpdatedErrorAsync } from "../../../store/send-email/send-email.thunks";

import {
  bookedSessionsUserRoute,
  contactRoute,
} from "../../../strings/routes/routes-strings";
import { failedToSendEmailInstructions } from "../../../strings/errors/errors-strings";

const useSendBalanceNotUpdatedErrorEmailThunk = () => {
  const { id, appOwnerEmail } = useGetCurrentUserSelectors();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const sendBalanceNotUpdatedErrorEmailThunk = (refundPrice) => {
    dispatch(
      sendEmailBalanceNotUpdatedErrorAsync({ appOwnerEmail, id, refundPrice })
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

  return { sendBalanceNotUpdatedErrorEmailThunk };
};

export default useSendBalanceNotUpdatedErrorEmailThunk;
