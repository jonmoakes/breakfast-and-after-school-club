import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import useHandleSignInFormChange from "./sign-in-form-hooks/use-handle-sign-in-form-change";
import useHandleSignInFormError from "./sign-in-form-hooks/use-handle-sign-in-form-error";

import { selectCurrentUserSelectors } from "../../store/user/user.slice";

import Loader from "../../components/loader/loader.component";
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

import { accountRoute, signUpRoute } from "../../strings/routes/routes-strings";

const SignIn = () => {
  useHandleSignInFormError();
  const { handleSignInFormChange } = useHandleSignInFormChange();

  const { currentUser, currentUserIsLoading } = useSelector(
    selectCurrentUserSelectors
  );

  return (
    <Container>
      {currentUser !== null && currentUser !== undefined && (
        <Navigate replace to={accountRoute} />
      )}
      {currentUserIsLoading ? <Loader /> : null}

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
          <SignInSchoolCode {...{ handleSignInFormChange }} />
          <Passwords {...{ handleSignInFormChange }} />
          <SignInButton />
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default SignIn;
