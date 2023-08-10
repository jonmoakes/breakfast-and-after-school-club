import { useSelector } from "react-redux";

import useGetSocialLoginResult from "./social-login-hooks/use-get-social-login-result";
import { selectError } from "../../store/user/user.selector";

import TroubleShooting from "../../components/social-logins/sections/troubleshooting.component";

import { Text } from "../../styles/p/p.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

import Safari from "../../components/social-logins/sections/safari.component";
import Brave from "../../components/social-logins/sections/brave.component";

const SocialLoginError = () => {
  const {
    reloadAndResetError,
    returnToSignInAndResetError,
    goToContactUsAndResetError,
  } = useGetSocialLoginResult();

  const error = useSelector(selectError);

  return (
    <>
      {error ? (
        <>
          <Text>
            sorry, there was an error signing you in... please try again.
          </Text>
          <Text>
            the error received was:
            <br />
            {error}
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

export default SocialLoginError;
