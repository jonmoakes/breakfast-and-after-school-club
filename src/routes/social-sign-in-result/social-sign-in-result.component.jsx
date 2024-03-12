import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

import SocialSignInError from "./social-sign-in-error.component";
import SocialSignInNavigateAndLoader from "./social-sign-in-navigate-and-loader.component";
import SocialSignInSuccess from "./social-sign-in-success.component";

const SocialLoginResult = () => (
  <Container>
    <SocialSignInNavigateAndLoader />

    <ParentDiv>
      <SocialSignInSuccess />
      <SocialSignInError />
    </ParentDiv>
  </Container>
);

export default SocialLoginResult;
