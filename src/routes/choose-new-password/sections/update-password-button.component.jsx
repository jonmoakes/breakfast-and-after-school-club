import useIsOnline from "../../../hooks/use-is-online";
import useConfirmUpdatePassword from "../choose-new-password-hooks/use-confirm-update-password";
import useGetChooseNewPasswordSelectors from "../../../hooks/get-selectors/use-get-choose-new-password-selectors";

import NetworkError from "../../../components/errors/network-error.component";

import { TopMarginDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";

const ResetPasswordButton = () => {
  const { isOnline } = useIsOnline();
  const { confirmUpdatePassword } = useConfirmUpdatePassword();
  const { newPassword, confirmNewPassword } =
    useGetChooseNewPasswordSelectors();

  return (
    <>
      {!isOnline ? (
        <NetworkError />
      ) : newPassword && confirmNewPassword ? (
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

export default ResetPasswordButton;
