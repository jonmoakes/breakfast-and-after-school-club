import Balancer from "react-wrap-balancer";

import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";
import useIsOnline from "../../hooks/use-is-online";

import Loader from "../../components/loader/loader.component";
import SocialSignInAccordion from "./social-sign-in-accordion.component";
import SocialSignInInput from "./social-sign-in-input.component";
import SocialSignInInstructions from "./social-sign-in-instructions.component";
import SocialSignInButtons from "./social-sign-in-buttons.component";

import { Container } from "../../styles/container/container.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const SocialSignIn = () => {
  const { currentUserIsLoading } = useGetCurrentUserSelectors();
  const { isOnline } = useIsOnline();

  return (
    <Container>
      {currentUserIsLoading ? <Loader /> : null}

      {isOnline ? (
        <>
          <ParentDiv>
            <BlackTitle>
              <Balancer>sign in with social account</Balancer>
            </BlackTitle>
          </ParentDiv>

          <ParentDiv>
            <SocialSignInAccordion />
          </ParentDiv>

          <ParentDiv>
            <SocialSignInInstructions />

            <SocialSignInInput />
            <SocialSignInButtons />
          </ParentDiv>
        </>
      ) : null}
    </Container>
  );
};

export default SocialSignIn;
