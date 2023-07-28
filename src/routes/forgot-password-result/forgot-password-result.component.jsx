import { useSelector } from "react-redux";

import useHandleResetPasswordFormChange from "./forgot-password-result-hooks/use-handle-reset-password-form-change";

import { selectIsLoading } from "../../store/loader/loader.selector";

import Loader from "../../components/loader/loader.component";
import Intro from "./sections/intro.component";
import NewPasswords from "./sections/new-passwords.component";
import ResetPasswordButton from "./sections/reset-password-button.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";

const ForgotPasswordResult = () => {
  const { handleResetPasswordFormChange } = useHandleResetPasswordFormChange();
  const isLoading = useSelector(selectIsLoading);

  return (
    <Container>
      {isLoading ? <Loader /> : null}

      <Intro />

      <ParentDiv>
        <Form>
          <NewPasswords {...{ handleResetPasswordFormChange }} />
          <ResetPasswordButton />
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default ForgotPasswordResult;
