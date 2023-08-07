import useHandleSignInFormSubmit from "../sign-in-form-hooks/use-handle-sign-in-form-submit";
import useIsOnline from "../../../hooks/use-is-online";

import NetworkError from "../../../components/errors/network-error.component";

import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { TopMarginDiv } from "../../../styles/div/div.styles";

import { forgotPasswordRequestRoute } from "../../../strings/strings";
import { WhiteStyledLink } from "../../../styles/link/link.styles";

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

          <WhiteStyledLink to={forgotPasswordRequestRoute}>
            forgot password?
          </WhiteStyledLink>
        </TopMarginDiv>
      ) : (
        <NetworkError />
      )}
    </>
  );
};

export default SignInButton;
