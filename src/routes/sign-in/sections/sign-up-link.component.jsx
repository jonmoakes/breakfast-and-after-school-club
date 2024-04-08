import { ParentDiv } from "../../../styles/div/div.styles";
import { StyledLink } from "../../../styles/link/link.styles";
import { Text } from "../../../styles/p/p.styles";

import { signUpRoute } from "../../../strings/routes/routes-strings";

const SignUpLink = () => (
  <ParentDiv>
    <Text>
      don't have an account?
      <br />
      <br /> <StyledLink to={signUpRoute}>sign up!</StyledLink>
    </Text>
  </ParentDiv>
);

export default SignUpLink;
