import useResetPasswordRequestResultSwal from "../../hooks/use-reset-password-request-result-swal";
import useGetGenerateNewPasswordRequestSelectors from "../../hooks/get-selectors/use-get-generate-new-password-request-selectors";
import useGenerateNewPasswordRequestActions from "../../hooks/get-actions-and-thunks/generate-new-password-request-actions-and-thunks/use-generate-new-password-request-actions";
import useCheckForValidEmailAndSendRequest from "./forgot-password-request-hooks/use-check-for-valid-email-and-send-request";

import Loader from "../../components/loader/loader.component";
import ForgotPasswordRequestAccordion from "./forgot-password-request-accordion.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form, LowercasedInput, Label } from "../../styles/form/form.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

import { enterEmailAddress } from "../../strings/placeholders/placeholders-strings";

const ForgotPasswordRequest = () => {
  useResetPasswordRequestResultSwal();
  const {
    generateNewPasswordRequestEmail,
    generateNewPasswordRequestIsLoading,
  } = useGetGenerateNewPasswordRequestSelectors();
  const { dispatchSetGenerateNewPasswordRequestEmailChange } =
    useGenerateNewPasswordRequestActions();
  const { checkForValidEmailAndSendRequest } =
    useCheckForValidEmailAndSendRequest();

  return (
    <Container>
      {generateNewPasswordRequestIsLoading ? <Loader /> : null}

      <ParentDiv>
        <BlackTitle>forgot password</BlackTitle>
      </ParentDiv>
      <ParentDiv>
        <ForgotPasswordRequestAccordion />
      </ParentDiv>

      <ParentDiv>
        <Form>
          <Label>email:</Label>
          <LowercasedInput
            type="email"
            required
            onChange={dispatchSetGenerateNewPasswordRequestEmailChange}
            value={generateNewPasswordRequestEmail || ""}
            placeholder={enterEmailAddress}
          />

          {generateNewPasswordRequestEmail ? (
            <YellowGreenButton
              type="button"
              onClick={checkForValidEmailAndSendRequest}
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
