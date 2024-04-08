import useHandleSignInFormError from "./sign-in-form-hooks/use-handle-sign-in-form-error";
import useGetSignInFormSelectors from "../../hooks/get-selectors/use-get-sign-in-form-selectors";

import HandleNavigateAndLoader from "./sections/handle-navigate-and-loader.component";
import SignInTitle from "./sections/sign-in-title.component";
import SignUpLink from "./sections/sign-up-link.component";
import EmailSignInForm from "./email-sign-in-form.component";
import SocialSignInForm from "./social-sign-in-form.component";

import { Container } from "../../styles/container/container.styles";

const SignIn = () => {
  const { showSocialSignInForm } = useGetSignInFormSelectors();
  useHandleSignInFormError();

  return (
    <Container>
      <HandleNavigateAndLoader />

      <SignInTitle />
      {!showSocialSignInForm ? <SignUpLink /> : null}

      {!showSocialSignInForm ? <EmailSignInForm /> : <SocialSignInForm />}
    </Container>
  );
};

export default SignIn;
