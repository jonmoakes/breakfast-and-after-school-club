import { Navigate } from "react-router-dom";

import useHandleSignUpFormError from "./sign-up-form-hooks/use-handle-sign-up-form-error";
import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";

import Loader from "../../components/loader/loader.component";
import SignUpName from "./sections/sign-up-name.component";
import SignUpSchoolCode from "./sections/sign-up-school-code.component";
import SignUpEmail from "./sections/sign-up-email.component";
import SignUpPhoneNumber from "./sections/sign-up-phone-number.component";
import SignUpPasswords from "./sections/sign-up-passwords.component";
import SignUpButton from "./sections/sign-up-button.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";

import { signInRoute, accountRoute } from "../../strings/routes/routes-strings";

const SignUp = () => {
  useHandleSignUpFormError();
  const { currentUser, currentUserIsLoading } = useGetCurrentUserSelectors();

  return (
    <Container>
      {currentUser !== null && <Navigate replace to={accountRoute} />}
      {currentUserIsLoading ? <Loader /> : null}

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
        <Text>
          <RedSpan>* </RedSpan> = required field:
        </Text>
        <Form>
          <SignUpName />
          <SignUpEmail />
          <SignUpPhoneNumber />
          <SignUpSchoolCode />
          <SignUpPasswords />
          <SignUpButton />
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default SignUp;
