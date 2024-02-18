import { useSelector, useDispatch } from "react-redux";

import useHandleForgotPasswordRequestEmailChange from "./forgot-password-request-hooks/use-handle-forgot-password-request-email-change";
import useForgotPasswordRequestSwal from "./forgot-password-request-hooks/use-forgot-password-request-swal";

import { selectForgotPasswordRequestSelectors } from "../../store/forgot-password-request/forgot-password-request.slice";
import { generateForgotPasswordLinkAsync } from "../../store/forgot-password-request/forgot-password-request-thunks";

import Loader from "../../components/loader/loader.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form, LowercasedInput, Label } from "../../styles/form/form.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

import { enterEmailAddress } from "../../strings/strings";

const ForgotPasswordRequest = () => {
  useForgotPasswordRequestSwal();
  const { handleForgotPasswordRequestEmailChange } =
    useHandleForgotPasswordRequestEmailChange();

  const { forgotPasswordRequestEmail, forgotPasswordRequestIsLoading } =
    useSelector(selectForgotPasswordRequestSelectors);

  const dispatch = useDispatch();

  return (
    <Container>
      {forgotPasswordRequestIsLoading ? <Loader /> : null}
      <ParentDiv>
        <BlackTitle>forgot password</BlackTitle>
      </ParentDiv>

      <ParentDiv>
        <Text>forgot your password?</Text>
        <Text>
          enter your email address below and tap the "reset password" button and
          we will send you a link to reset it!
        </Text>
      </ParentDiv>

      <ParentDiv>
        <Form>
          <Label>email:</Label>
          <LowercasedInput
            type="email"
            required
            onChange={handleForgotPasswordRequestEmailChange}
            value={forgotPasswordRequestEmail || ""}
            placeholder={enterEmailAddress}
          />

          {forgotPasswordRequestEmail ? (
            <YellowGreenButton
              type="button"
              onClick={() =>
                dispatch(
                  generateForgotPasswordLinkAsync({
                    forgotPasswordRequestEmail,
                  })
                )
              }
            >
              reset password
            </YellowGreenButton>
          ) : null}
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default ForgotPasswordRequest;
