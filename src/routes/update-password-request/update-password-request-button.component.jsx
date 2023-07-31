import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import useConfirmUpdatePasswordRequest from "./update-password-request-hooks/use-confirm-update-password-request";
import useIsOnline from "../../hooks/use-is-online";

import { selectCurrentUser } from "../../store/user/user.selector";

import NetworkError from "../../components/errors/network-error.component";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { Text } from "../../styles/p/p.styles";
import { BlueLowercasedSpan } from "../../styles/span/span.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import { updateEmailRoute } from "../../strings/strings";

const UpdatePasswordRequestButton = () => {
  const { confirmUpdatePasswordRequest } = useConfirmUpdatePasswordRequest();
  const { isOnline } = useIsOnline();

  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const { email } = currentUser;

  return (
    <>
      {!isOnline ? (
        <NetworkError />
      ) : email ? (
        <>
          <BlackHr />
          <Text>the email that we shall send your request to is:</Text>
          <BlueLowercasedSpan>{email}</BlueLowercasedSpan>
          <Text>if this is ok, tap the "send request" button below</Text>

          <YellowGreenButton
            type="button"
            onClick={confirmUpdatePasswordRequest}
          >
            send request
          </YellowGreenButton>

          <BlackHr />

          <Text>need to update your email address?</Text>
          <Text>tap the "update your email" button below.</Text>
          <YellowGreenButton
            type="button"
            onClick={() => navigate(updateEmailRoute)}
          >
            update your email
          </YellowGreenButton>
        </>
      ) : null}
    </>
  );
};

export default UpdatePasswordRequestButton;
