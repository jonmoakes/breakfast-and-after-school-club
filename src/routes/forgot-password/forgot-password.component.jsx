import { useSelector } from "react-redux";

import useForgotPasswordSubmit from "./use-forgot-password-submit";

import { selectIsLoading } from "../../store/loader/loader.selector";
import { selectForgotPasswordEmail } from "../../store/forgot-password/forgot-password.selector";

import Loader from "../../components/loader/loader.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form, LowercasedInput, Label } from "../../styles/form/form.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

import { enterEmailAddress } from "../../strings/strings";

const ForgotPassword = () => {
  const { handleForgotPasswordSubmit, handleForgotPasswordEmailChange } =
    useForgotPasswordSubmit();

  const forgotPasswordEmail = useSelector(selectForgotPasswordEmail);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Container>
      {isLoading ? <Loader /> : null}
      <ParentDiv>
        <BlackTitle>forgot password</BlackTitle>
      </ParentDiv>

      <ParentDiv>
        <Text>forgot your password?</Text>
        <Text>
          enter your email address below and tap the "reset password" button and
          we will send you a link to reset your password!
        </Text>
      </ParentDiv>

      <ParentDiv>
        <Form>
          <Label>email:</Label>
          <LowercasedInput
            type="email"
            required
            onChange={handleForgotPasswordEmailChange}
            value={forgotPasswordEmail || ""}
            placeholder={enterEmailAddress}
          />

          {forgotPasswordEmail ? (
            <YellowGreenButton
              type="button"
              onClick={handleForgotPasswordSubmit}
            >
              reset password
            </YellowGreenButton>
          ) : null}
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default ForgotPassword;
