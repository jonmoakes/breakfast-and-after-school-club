import { useSelector } from "react-redux";

import useConfirmUpdatePassword from "./update-password-hooks/use-confirm-update-password";
import useIsOnline from "../../hooks/use-is-online";

import { selectCurrentUserSelectors } from "../../store/user/user.slice";

import NetworkError from "../../components/errors/network-error.component";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { Text } from "../../styles/p/p.styles";
import { BlueLowercasedSpan } from "../../styles/span/span.styles";

const UpdatePasswordButton = () => {
  const { isOnline } = useIsOnline();
  const { confirmUpdatePassword } = useConfirmUpdatePassword();

  const { currentUser } = useSelector(selectCurrentUserSelectors);
  const { email } = currentUser;

  return (
    <>
      {!isOnline ? (
        <NetworkError />
      ) : email ? (
        <>
          <Text>
            the email address that we will send your password reset link to is:
          </Text>
          <Text>
            <BlueLowercasedSpan>{email}</BlueLowercasedSpan>
          </Text>
          <BlackHr />

          <YellowGreenButton type="button" onClick={confirmUpdatePassword}>
            update password
          </YellowGreenButton>

          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default UpdatePasswordButton;
