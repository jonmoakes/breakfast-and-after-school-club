import useHandleSignInFormSubmit from "../../sign-in-form-hooks/use-handle-sign-in-form-submit";
import useIsOnline from "../../../../hooks/use-is-online";
import useSignInFormActions from "../../../../hooks/get-actions-and-thunks/use-sign-in-form-actions";

import NetworkError from "../../../../components/errors/network-error.component";

import { YellowGreenButton } from "../../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";
import {
  ForgotPasswordDiv,
  TopMarginDiv,
} from "../../../../styles/div/div.styles";
import { WhiteStyledLink } from "../../../../styles/link/link.styles";
import { Text } from "../../../../styles/p/p.styles";

import { forgotPasswordRequestRoute } from "../../../../strings/routes/routes-strings";

const SignInButton = () => {
  const { handleSignInFormSubmit } = useHandleSignInFormSubmit();
  const { isOnline } = useIsOnline();
  const { dispatchShowSocialSignIn, dispatchResetSignInFormDetails } =
    useSignInFormActions();

  const showSocialSignInAndClearSignInDetails = () => {
    dispatchShowSocialSignIn(true);
    dispatchResetSignInFormDetails();
  };

  return (
    <>
      {isOnline ? (
        <TopMarginDiv>
          <BlackHr />
          <YellowGreenButton type="button" onClick={handleSignInFormSubmit}>
            Sign In
          </YellowGreenButton>

          <Text>or:</Text>

          <YellowGreenButton
            type="button"
            onClick={showSocialSignInAndClearSignInDetails}
          >
            sign in with social
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
