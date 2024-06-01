import { Navigate } from "react-router-dom";

import useHandleSignUpFormError from "./sign-up-form-hooks/use-handle-sign-up-form-error";
import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";
import useSignUpFormActions from "../../hooks/get-actions-and-thunks/use-sign-up-form-actions";

import Loader from "../../components/loader/loader.component";
import PasswordHelpAccordion from "./sections/password-help-accordion.component";
import ReadBeforeSigningUp from "./sections/read-before-signing-up.component";
import SignUpName from "./sections/sign-up-name.component";
import SignUpSchoolCode from "./sections/sign-up-school-code.component";
import SignUpEmail from "./sections/sign-up-email.component";
import SignUpPhoneNumber from "./sections/sign-up-phone-number.component";
import SignUpPasswords from "./sections/sign-up-passwords.component";
import SignUpButton from "./sections/sign-up-button.component";
import Footer from "../../components/footer/footer.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";

import { signInRoute, accountRoute } from "../../strings/routes/routes-strings";

import { BlackHr } from "../../styles/hr/hr.styles";

const SignUp = () => {
  useHandleSignUpFormError();
  const { currentUser, currentUserIsLoading } = useGetCurrentUserSelectors();
  const { dispatchHandleSignUpFormChange } = useSignUpFormActions();

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
        <ReadBeforeSigningUp />

        <BlackHr />
        <PasswordHelpAccordion />
        <BlackHr />
        <Form>
          <SignUpName {...{ dispatchHandleSignUpFormChange }} />
          <SignUpEmail {...{ dispatchHandleSignUpFormChange }} />
          <SignUpPhoneNumber {...{ dispatchHandleSignUpFormChange }} />
          <SignUpSchoolCode {...{ dispatchHandleSignUpFormChange }} />
          <SignUpPasswords {...{ dispatchHandleSignUpFormChange }} />
          <SignUpButton />
        </Form>
      </ParentDiv>

      <Footer />
    </Container>
  );
};

export default SignUp;
