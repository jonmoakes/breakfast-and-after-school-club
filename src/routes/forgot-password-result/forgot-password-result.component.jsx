import { useSelector } from "react-redux";

import useForgotPasswordResultSwal from "./forgot-password-result-hooks/use-forgot-password-result-swal";

import { selectForgotPasswordResultIsLoading } from "../../store/forgot-password-result/forgot-password-result.selector";

import Loader from "../../components/loader/loader.component";
import Intro from "./sections/intro.component";
import NewPasswords from "./sections/new-passwords.component";
import ResetPasswordButton from "./sections/reset-password-button.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";

const ForgotPasswordResult = () => {
  useForgotPasswordResultSwal();

  const isLoading = useSelector(selectForgotPasswordResultIsLoading);

  return (
    <Container>
      {isLoading ? <Loader /> : null}

      <Intro />

      <ParentDiv>
        <Form>
          <NewPasswords />
          <ResetPasswordButton />
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default ForgotPasswordResult;
