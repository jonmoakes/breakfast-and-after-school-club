import { useSelector } from "react-redux";

import useHandleResetPasswordSubmit from "../forgot-password-result-hooks/use-handle-reset-password-submit";
import useIsOnline from "../../../hooks/use-is-online";
import { selectNewPasswordDetails } from "../../../store/forgot-password/forgot-password.selector";

import NetworkError from "../../../components/errors/network-error.component";

import { TopMarginDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";

const ResetPasswordButton = () => {
  const { isOnline } = useIsOnline();
  const { handleResetPasswordSubmit } = useHandleResetPasswordSubmit();

  const newPasswordDetails = useSelector(selectNewPasswordDetails);
  const { newPassword, confirmNewPassword } = newPasswordDetails;

  return (
    <>
      {!isOnline ? (
        <NetworkError />
      ) : isOnline && newPassword && confirmNewPassword ? (
        <TopMarginDiv>
          <BlackHr />
          <YellowGreenButton type="button" onClick={handleResetPasswordSubmit}>
            reset password
          </YellowGreenButton>
        </TopMarginDiv>
      ) : null}
    </>
  );
};

export default ResetPasswordButton;
