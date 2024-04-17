import useHandleSignInFormError from "./sign-in-form-hooks/use-handle-sign-in-form-error";
import useSignInFormActions from "../../hooks/get-actions-and-thunks/use-sign-in-form-actions";

import HandleNavigateAndLoader from "./sections/handle-navigate-and-loader.component";
import SignInTitle from "./sections/sign-in-title.component";
import SignUpLink from "./sections/sign-up-link.component";
import SignInEmail from "./sections/sign-in-email.component";
import SignInSchoolCode from "./sections/sign-in-school-code.component";
import SignInPassword from "./sections/sign-in-password.component";
import SignInButton from "./sections/sign-in-button.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";

const SignIn = () => {
  useHandleSignInFormError();
  const { dispatchHandleSignInFormChange } = useSignInFormActions();

  return (
    <Container>
      <HandleNavigateAndLoader />
      <SignInTitle />
      <SignUpLink />

      <ParentDiv>
        <Form>
          <SignInEmail {...{ dispatchHandleSignInFormChange }} />
          <SignInSchoolCode {...{ dispatchHandleSignInFormChange }} />
          <SignInPassword {...{ dispatchHandleSignInFormChange }} />
          <SignInButton />
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default SignIn;
