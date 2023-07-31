import { useSelector } from "react-redux";

import useConfirmUpdatePassword from "../update-password-result-hooks/use-confirm-update-password";
import useIsOnline from "../../../hooks/use-is-online";

import { selectUpdatePasswordDetails } from "../../../store/update-password/update-password.selector";

import NetworkError from "../../../components/errors/network-error.component";

import { TopMarginDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";

const UpdatePasswordButton = () => {
  const { isOnline } = useIsOnline();
  const { confirmUpdatePassword } = useConfirmUpdatePassword();

  const updatePasswordDetails = useSelector(selectUpdatePasswordDetails);
  const { updatePasswordNewPassword, updatePasswordConfirmNewPassword } =
    updatePasswordDetails;

  return (
    <>
      {!isOnline ? (
        <NetworkError />
      ) : isOnline &&
        updatePasswordNewPassword &&
        updatePasswordConfirmNewPassword ? (
        <TopMarginDiv>
          <BlackHr />
          <YellowGreenButton type="button" onClick={confirmUpdatePassword}>
            update password
          </YellowGreenButton>
        </TopMarginDiv>
      ) : null}
    </>
  );
};

export default UpdatePasswordButton;
