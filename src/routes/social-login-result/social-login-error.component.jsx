import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectError } from "../../store/user/user.selector";
import { resetErrorMessage } from "../../store/user/user.slice";

import TroubleShooting from "../../components/social-logins/sections/troubleshooting.component";

import { Text } from "../../styles/p/p.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

import { contactRoute, signInRoute } from "../../strings/strings";
import Safari from "../../components/social-logins/sections/safari.component";
import Brave from "../../components/social-logins/sections/brave.component";

const SocialLoginError = () => {
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const returnToSignInAndResetError = () => {
    navigate(signInRoute);
    dispatch(resetErrorMessage());
  };

  const goToContactUsAndResetError = () => {
    navigate(contactRoute);
    dispatch(resetErrorMessage());
  };

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
