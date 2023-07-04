import useHandleSignUpFormChange from "./sign-up-form-hooks/use-handle-sign-up-form-change";

// import { selectIsSignInLoading } from "../../../store/user/user.selector";
// import Loader from "../../../components/loader/loader.component";

import DisplayName from "./sections/display-name.component";
import Email from "./sections/email.component";
import Passwords from "./sections/passwords.component";
import SignUpButton from "./sections/sign-up-button.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";

import { signInRoute } from "../../strings/strings";

const SignUp = () => {
  const { handleSignUpFormChange } = useHandleSignUpFormChange();

  return (
    <Container>
      {/* {isLoading && <Loader />} */}
      <ParentDiv>
        <BlackTitle>sign up</BlackTitle>
      </ParentDiv>

      <ParentDiv>
        <Text>
          already have an account?
          <br />
          <br /> <StyledLink to={signInRoute}>sign in</StyledLink>
        </Text>
      </ParentDiv>

      <ParentDiv>
        <Form>
          <DisplayName {...{ handleSignUpFormChange }} />
          <Email {...{ handleSignUpFormChange }} />
          <Passwords {...{ handleSignUpFormChange }} />
          <SignUpButton />
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default SignUp;
