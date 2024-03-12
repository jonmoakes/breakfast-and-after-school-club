import { useSelector } from "react-redux";
import Balancer from "react-wrap-balancer";

import useIsOnline from "../../hooks/use-is-online";

import { selectCurrentUserSelectors } from "../../store/user/user.slice";

import Loader from "../../components/loader/loader.component";
import SocialSignInAccordion from "./social-sign-in-accordion.component";
import SocialSignInInput from "./social-sign-in-input.component";
import SocialSignInInstructions from "./social-sign-in-instructions.component";
import SocialSignInButtons from "./social-sign-in-buttons.component";

import { Container } from "../../styles/container/container.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const SocialSignIn = () => {
  const { isOnline } = useIsOnline();

  const { currentUserIsLoading } = useSelector(selectCurrentUserSelectors);

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
