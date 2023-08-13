import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

import SocialLoginError from "./social-login-error.component";
import NavigateAndLoader from "./navigate-and-loader.component";
import SocialLoginSuccess from "./social-login-success.component";

const SocialLoginResult = () => {
  return (
    <Container>
      <NavigateAndLoader />
      <ParentDiv>
        <SocialLoginSuccess />
        <SocialLoginError />
      </ParentDiv>
    </Container>
  );
};

export default SocialLoginResult;
