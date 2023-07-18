import useHandleSignUpFormSubmit from "../sign-up-form-hooks/use-handle-sign-up-form-submit";
import useIsOnline from "../../../hooks/use-is-online";

import NetworkError from "../../../components/errors/network-error.component";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const SignUpButton = () => {
  const { handleSignUpFormSubmit } = useHandleSignUpFormSubmit();
  const { isOnline } = useIsOnline();

  return (
    <>
      {isOnline ? (
        <>
          <BlackHr />
          <YellowGreenButton type="button" onClick={handleSignUpFormSubmit}>
            Sign Up
          </YellowGreenButton>
        </>
      ) : (
        <NetworkError />
      )}
    </>
  );
};

export default SignUpButton;
