import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { account } from "../../utils/appwrite/appwrite-config";

import { setCurrentUser } from "../../store/user/user.slice";
import { startLoader, stopLoader } from "../../store/loader/loader.slice";
import { selectIsLoading } from "../../store/loader/loader.selector";

import Loader from "../../components/loader/loader.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";

import { accountRoute, signInRoute } from "../../strings/strings";

const MagicUrlResult = () => {
  const [error, setError] = useState(null);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getMagicData = async () => {
      dispatch(startLoader());
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const userId = urlParams.get("userId");
        const secret = urlParams.get("secret");

        await account.updateMagicURLSession(userId, secret);
        const user = await account.get();

        dispatch(stopLoader());
        dispatch(setCurrentUser(user));
        navigate(accountRoute);
      } catch (error) {
        dispatch(stopLoader());
        setError(error.message);
      }
    };
    getMagicData();
  }, [dispatch, navigate]);

  return (
    <Container>
      {isLoading ? <Loader /> : null}
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
              {error}
            </Text>
            <YellowGreenButton onClick={() => navigate(signInRoute)}>
              back to sign in
            </YellowGreenButton>
          </>
        )}
      </ParentDiv>
    </Container>
  );
};

export default MagicUrlResult;
