import useHandleSignInFormError from "./sign-in-form-hooks/use-handle-sign-in-form-error";
import useSignInFormActions from "../../hooks/get-actions-and-thunks/use-sign-in-form-actions";

import HandleNavigateAndLoader from "./sections/handle-navigate-and-loader.component";
import Email from "./sections/sign-in-email.component";
import SignInSchoolCode from "./sections/sign-in-school-code.component";
import Passwords from "./sections/sign-in-password.component";
import SignInButton from "./sections/sign-in-button.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";

import { signUpRoute } from "../../strings/routes/routes-strings";

const SignIn = () => {
  useHandleSignInFormError();
  const { dispatchHandleSignInFormChange } = useSignInFormActions();

  return (
    <Container>
      <HandleNavigateAndLoader />

      <ParentDiv>
        <BlackTitle>sign in</BlackTitle>
      </ParentDiv>

      <ParentDiv>
        <Text>
          don't have an account?
          <br />
          <br /> <StyledLink to={signUpRoute}>sign up!</StyledLink>
        </Text>
      </ParentDiv>

      <ParentDiv>
        <Form>
          <Email {...{ dispatchHandleSignInFormChange }} />
          <SignInSchoolCode {...{ dispatchHandleSignInFormChange }} />
          <Passwords {...{ dispatchHandleSignInFormChange }} />
          <SignInButton />
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default SignIn;
