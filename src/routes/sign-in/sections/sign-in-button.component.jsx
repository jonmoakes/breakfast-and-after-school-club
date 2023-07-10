import useHandleSignInFormSubmit from "../sign-in-form-hooks/use-handle-sign-in-form-submit";
import useIsOnline from "../../../hooks/use-is-online";

import NetworkError from "../../../components/errors/network-error.component";

import { GreenButton } from "../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const SignInButton = () => {
  const { handleSignInFormSubmit } = useHandleSignInFormSubmit();
  const { isOnline } = useIsOnline();

  return (
    <>
      {isOnline ? (
        <>
          <BlackHr />
          <GreenButton type="button" onClick={handleSignInFormSubmit}>
            Sign In
          </GreenButton>
        </>
      ) : (
        <NetworkError />
      )}
    </>
  );
};

export default SignInButton;
