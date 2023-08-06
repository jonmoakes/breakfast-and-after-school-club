import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";

import {
  selectCurrentUser,
  selectIsUserLoading,
  selectError,
} from "../../store/user/user.selector";
import { resetErrorMessage } from "../../store/user/user.slice";

import Loader from "../../components/loader/loader.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";

import { signInRoute, accountRoute } from "../../strings/strings";
import useGetSocialLoginResult from "./use-get-social-login-result";
import SocialLoginInfo from "../../components/social-logins/social-logins-info.component";

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
            <ParentDiv>
              <BlackTitle>please wait...</BlackTitle>
              <BlueH2>signing you in...</BlueH2>
            </ParentDiv>

            <ParentDiv>
              <Text>
                if you haven't been redirected within 30 seconds, please try
                reloading the page by tapping the button below.
              </Text>
              <YellowGreenButton onClick={() => window.location.reload()}>
                reload page
              </YellowGreenButton>
              <Text>or follow these troubleshooting options:</Text>
              <SocialLoginInfo />
            </ParentDiv>
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
