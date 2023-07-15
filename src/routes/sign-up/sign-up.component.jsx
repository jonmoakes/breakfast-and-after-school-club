import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import useHandleSignUpFormError from "./sign-up-form-hooks/use-handle-sign-up-form-error";
import useHandleSignUpFormChange from "./sign-up-form-hooks/use-handle-sign-up-form-change";

import {
  selectIsLoading,
  selectCurrentUser,
} from "../../store/user/user.selector";
import Loader from "../../components/loader/loader.component";

import SignUpDisplayName from "./sections/sign-up-display-name.component";
import SignUpEmail from "./sections/sign-up-email.component";
import SignUpPasswords from "./sections/sign-up-passwords.component";
import SignUpButton from "./sections/sign-up-button.component";
import SocialLogins from "../../components/social-logins/social-logins.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";

import { signInRoute, accountRoute } from "../../strings/strings";

const SignUp = () => {
  useHandleSignUpFormError();
  const { handleSignUpFormChange } = useHandleSignUpFormChange();

  const isLoading = useSelector(selectIsLoading);
  const currentUser = useSelector(selectCurrentUser);
  return (
    <Container>
      {currentUser !== null && <Navigate replace to={accountRoute} />}
      {isLoading && <Loader />}

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
          <SignUpDisplayName {...{ handleSignUpFormChange }} />
          <SignUpEmail {...{ handleSignUpFormChange }} />
          <SignUpPasswords {...{ handleSignUpFormChange }} />
          <SignUpButton />
          <SocialLogins />
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default SignUp;
