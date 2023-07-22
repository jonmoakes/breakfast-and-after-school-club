import { LowercasedInput, Label } from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const SignUpEmail = ({ handleSignUpFormChange }) => (
  <>
    <Label>
      <RedSpan>* </RedSpan>email:
    </Label>
    <LowercasedInput
      type="email"
      name="email"
      onChange={handleSignUpFormChange}
      required
    />
  </>
);

export default SignUpEmail;
