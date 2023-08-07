import { useSelector } from "react-redux";

import useIsOnline from "../../../hooks/use-is-online";
import useConfirmResetPassword from "../forgot-password-result-hooks/use-confirm-reset-password";

import { selectNewPasswordDetails } from "../../../store/forgot-password-result/forgot-password-result.selector";

import NetworkError from "../../../components/errors/network-error.component";

import { TopMarginDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";

const ResetPasswordButton = () => {
  const { isOnline } = useIsOnline();
  const { confirmResetPassword } = useConfirmResetPassword();

  const newPasswordDetails = useSelector(selectNewPasswordDetails);
  const { newPassword, confirmNewPassword } = newPasswordDetails;

  return (
    <>
      {!isOnline ? (
        <NetworkError />
      ) : isOnline && newPassword && confirmNewPassword ? (
        <TopMarginDiv>
          <BlackHr />
          <YellowGreenButton type="button" onClick={confirmResetPassword}>
            reset password
          </YellowGreenButton>
        </TopMarginDiv>
      ) : null}
    </>
  );
};

export default ResetPasswordButton;
