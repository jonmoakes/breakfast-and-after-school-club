import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";

import useHamburgerHandlerNavigate from "../../use-hamburger-handler-navigate";
import useFireSwal from "../../use-fire-swal";

import { sendEmailResetSessionSpacesErrorAsync } from "../../../store/send-email/send-email.thunks";

import { failedToSendEmailInstructions } from "../../../strings/errors/errors-strings";
import { contactRoute } from "../../../strings/routes/routes-strings";

const useSendResetSessionSpacesErrorEmailThunk = () => {
  const { appOwnerEmail } = useGetCurrentUserSelectors();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { fireSwal } = useFireSwal();

  const dispatch = useDispatch();

  const sendResetSessionSpacesErrorEmailThunk = (
    date,
    sessionType,
    numberOfSpacesToAdd
  ) => {
    dispatch(
      sendEmailResetSessionSpacesErrorAsync({
        appOwnerEmail,
        date,
        sessionType,
        numberOfSpacesToAdd,
      })
    ).then((resultAction) => {
      if (sendEmailResetSessionSpacesErrorAsync.fulfilled.match(resultAction)) {
        window.location.reload();
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

  return { sendResetSessionSpacesErrorEmailThunk };
};

export default useSendResetSessionSpacesErrorEmailThunk;
