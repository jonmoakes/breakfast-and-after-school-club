import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import useHandleSignInFormChange from "./sign-in-form-hooks/use-handle-sign-in-form-change";
import useHandleSignInFormError from "./sign-in-form-hooks/use-handle-sign-in-form-error";

import {
  selectIsLoading,
  selectCurrentUser,
} from "../../store/user/user.selector";
import Loader from "../../components/loader/loader.component";

import Email from "./sections/sign-in-email.component";
import Passwords from "./sections/sign-in-password.component";
import SignInButton from "./sections/sign-in-button.component";
import SocialLogins from "../../components/social-logins/social-logins.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";

import { accountRoute, signUpRoute } from "../../strings/strings";

const SignIn = () => {
  useHandleSignInFormError();
  const { handleSignInFormChange } = useHandleSignInFormChange();

  const isLoading = useSelector(selectIsLoading);
  const currentUser = useSelector(selectCurrentUser);

  return (
    <Container>
      {currentUser !== null && <Navigate replace to={accountRoute} />}
      {isLoading && <Loader />}

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
          <Email {...{ handleSignInFormChange }} />
          <Passwords {...{ handleSignInFormChange }} />
          <SignInButton />
          <SocialLogins />
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default SignIn;
