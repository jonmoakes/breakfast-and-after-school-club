import useSignInFormActions from "../../hooks/get-actions-and-thunks/use-sign-in-form-actions";

import SignInEmail from "./sections/email-sign-in/sign-in-email.component";
import SignInSchoolCode from "./sections/email-sign-in/sign-in-school-code.component";
import SignInPassword from "./sections/email-sign-in/sign-in-password.component";
import SignInButton from "./sections/email-sign-in/sign-in-button.component";

import { Form } from "../../styles/form/form.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const EmailSignInForm = () => {
  const { dispatchHandleSignInFormChange } = useSignInFormActions();

  return (
    <ParentDiv>
      <Form>
        <SignInEmail {...{ dispatchHandleSignInFormChange }} />
        <SignInSchoolCode {...{ dispatchHandleSignInFormChange }} />
        <SignInPassword {...{ dispatchHandleSignInFormChange }} />
        <SignInButton />
      </Form>
    </ParentDiv>
  );
};

export default EmailSignInForm;
