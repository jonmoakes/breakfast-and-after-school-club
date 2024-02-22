import { useSelector, useDispatch } from "react-redux";

import useHandleForgotPasswordRequestEmailChange from "./forgot-password-request-hooks/use-handle-forgot-password-request-email-change";
import useResetPasswordRequestResultSwal from "../../hooks/use-reset-password-request-result-swal";

import { selectGenerateNewPasswordRequestSelectors } from "../../store/generate-new-password-request/generate-new-password-request.slice";
import { generateNewPasswordRequestAsync } from "../../store/generate-new-password-request/generate-new-password-request.thunks";

import Loader from "../../components/loader/loader.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form, LowercasedInput, Label } from "../../styles/form/form.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

import { enterEmailAddress } from "../../strings/strings";

const ForgotPasswordRequest = () => {
  useResetPasswordRequestResultSwal();
  const { handleForgotPasswordRequestEmailChange } =
    useHandleForgotPasswordRequestEmailChange();

  const {
    generateNewPasswordRequestEmail,
    generateNewPasswordRequestIsLoading,
  } = useSelector(selectGenerateNewPasswordRequestSelectors);

  const dispatch = useDispatch();

  return (
    <Container>
      {generateNewPasswordRequestIsLoading ? <Loader /> : null}

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
            value={generateNewPasswordRequestEmail || ""}
            placeholder={enterEmailAddress}
          />

          {generateNewPasswordRequestEmail ? (
            <YellowGreenButton
              type="button"
              onClick={() =>
                dispatch(
                  generateNewPasswordRequestAsync({
                    generateNewPasswordRequestEmail,
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
