import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import useGetMagicUrlResult from "./use-get-magic-url-result";

import {
  selectIsUserLoading,
  selectCurrentUser,
  selectError,
} from "../../store/user/user.selector";

import Loader from "../../components/loader/loader.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";

import {
  accountRoute,
  appwriteNoUserError,
  magicUrlNoUserDocCreatedMessage,
  signInRoute,
} from "../../strings/strings";
import { resetErrorMessage } from "../../store/user/user.slice";

const MagicUrlResult = () => {
  useGetMagicUrlResult();

  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsUserLoading);
  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const returnToSignInAndResetError = () => {
    navigate(signInRoute);
    dispatch(resetErrorMessage());
  };

  return (
    <Container>
      {isLoading ? <Loader /> : null}
      {currentUser !== null && <Navigate replace to={accountRoute} />}

      <ParentDiv>
        {!error ? (
          <>
            <BlackTitle>please wait...</BlackTitle>
            <BlueH2>signing you in...</BlueH2>
          </>
        ) : (
          <>
            <Text>
              sorry, there was an error signing you in... please try again.
            </Text>
            <Text>
              the error received was:
              <br />
              {error === appwriteNoUserError
                ? magicUrlNoUserDocCreatedMessage
                : error}
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

export default MagicUrlResult;
