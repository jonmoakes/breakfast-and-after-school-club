import useHandleSignInFormSubmit from "../sign-in-form-hooks/use-handle-sign-in-form-submit";
import useIsOnline from "../../../hooks/use-is-online";

import NetworkError from "../../../components/errors/network-error.component";

import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import {
  ForgotPasswordDiv,
  TopMarginDiv,
} from "../../../styles/div/div.styles";
import { WhiteStyledLink } from "../../../styles/link/link.styles";

import { forgotPasswordRequestRoute } from "../../../strings/routes/routes-strings";

const SignInButton = () => {
  const { handleSignInFormSubmit } = useHandleSignInFormSubmit();
  const { isOnline } = useIsOnline();

  return (
    <>
      {isOnline ? (
        <TopMarginDiv>
          <BlackHr />
          <YellowGreenButton type="button" onClick={handleSignInFormSubmit}>
            Sign In
          </YellowGreenButton>

          <ForgotPasswordDiv>
            <WhiteStyledLink to={forgotPasswordRequestRoute}>
              forgot password?
            </WhiteStyledLink>
          </ForgotPasswordDiv>
        </TopMarginDiv>
      ) : (
        <NetworkError />
      )}
    </>
  );
};

export default SignInButton;
