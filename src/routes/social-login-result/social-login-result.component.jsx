import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";

import useGetSocialLoginResult from "./use-get-social-login-result";

import {
  selectCurrentUser,
  selectIsUserLoading,
  selectError,
} from "../../store/user/user.selector";
import { resetErrorMessage } from "../../store/user/user.slice";

import Loader from "../../components/loader/loader.component";

import TroubleShooting from "../../components/social-logins/sections/troubleshooting.component";
import Safari from "../../components/social-logins/sections/safari.component";
import Brave from "../../components/social-logins/sections/brave.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";

import { signInRoute, accountRoute } from "../../strings/strings";

const SocialLoginResult = () => {
  useGetSocialLoginResult();

  const currentUser = useSelector(selectCurrentUser);
  const errorMessage = useSelector(selectError);
  const isLoading = useSelector(selectIsUserLoading);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const returnToSignInAndResetError = () => {
    navigate(signInRoute);
    dispatch(resetErrorMessage());
  };

  return (
    <Container>
      {currentUser !== null && <Navigate replace to={accountRoute} />}
      {isLoading ? <Loader /> : null}
      <ParentDiv>
        {!errorMessage ? (
          <>
            <BlackTitle>please wait...</BlackTitle>
            <BlueH2>signing you in...</BlueH2>

            <Text>
              if you haven't been redirected within 30 seconds, please try
              reloading the page by tapping the button below.
            </Text>
            <YellowGreenButton onClick={() => window.location.reload()}>
              reload page
            </YellowGreenButton>
            <Text>or follow these troubleshooting options:</Text>
            <TroubleShooting />
            <Safari />
            <Brave />
          </>
        ) : (
          <>
            <Text>
              sorry, there was an error signing you in... please try again.
            </Text>
            <Text>
              the error received was:
              <br />
              {errorMessage}
            </Text>

            <YellowGreenButton onClick={returnToSignInAndResetError}>
              back to sign in
            </YellowGreenButton>
          </>
        )}
      </ParentDiv>
    </Container>
  );
};

export default SocialLoginResult;
