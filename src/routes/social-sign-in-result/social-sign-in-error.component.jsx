import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";
import useNavAndResetSocialSignInError from "./social-sign-in-result-hooks/use-navigate-and-reset-social-sign-in-error";

import TroubleShooting from "../../components/social-sign-in-browser-help/troubleshooting.component";
import Safari from "../../components/social-sign-in-browser-help/safari.component";
import Brave from "../../components/social-sign-in-browser-help/brave.component";

import { Text } from "../../styles/p/p.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

const SocialSignInError = () => {
  const { currentUserError } = useGetCurrentUserSelectors();
  const {
    reloadAndResetError,
    returnToSignInAndResetError,
    goToContactUsAndResetError,
  } = useNavAndResetSocialSignInError();

  return (
    <>
      {currentUserError ? (
        <>
          <Text>
            sorry, there was an error signing you in... please try again.
          </Text>
          <Text>
            the error received was:
            <br />
            {currentUserError}
          </Text>

          <TroubleShooting />
          <Safari />
          <Brave />

          <Text>
            once you have followed these steps, tap the page reload button
            below.
          </Text>

          <Text>
            note, if you are using the app as a full screen app installed on
            your device's home screen, you may need to force restart the app in
            order for the changes to take effect.
          </Text>

          <YellowGreenButton onClick={reloadAndResetError}>
            reload page
          </YellowGreenButton>

          <Text>or:</Text>

          <YellowGreenButton onClick={returnToSignInAndResetError}>
            back to sign in
          </YellowGreenButton>

          <Text>or</Text>

          <YellowGreenButton onClick={goToContactUsAndResetError}>
            contact us
          </YellowGreenButton>
        </>
      ) : null}
    </>
  );
};

export default SocialSignInError;
