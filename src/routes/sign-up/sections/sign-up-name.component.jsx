import { CapitalizedInput, Label } from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const SignUpName = ({ handleSignUpFormChange }) => (
  <>
    <Label>
      <RedSpan>* </RedSpan>name:
    </Label>
    <CapitalizedInput
      type="text"
      name="name"
      onChange={handleSignUpFormChange}
      required
    />
  </>
);

export default SignUpName;
