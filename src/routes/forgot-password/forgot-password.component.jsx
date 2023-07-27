import { useState } from "react";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form, LowercasedInput } from "../../styles/form/form.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

import { validateEmail } from "../../functions/validate-email";
import { enterEmailAddress } from "../../strings/strings";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <Container>
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
          <LowercasedInput
            type="email"
            required
            onChange={handleChange}
            value={email || ""}
            placeholder={enterEmailAddress}
          />

          {email && validateEmail(email) ? (
            <YellowGreenButton>reset password</YellowGreenButton>
          ) : null}
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default ForgotPassword;
