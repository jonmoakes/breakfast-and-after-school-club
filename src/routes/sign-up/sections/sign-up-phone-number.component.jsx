import { CapitalizedInput, Label } from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const SignUpPhoneNumber = ({ handleSignUpFormChange }) => (
  <>
    <Label>
      <RedSpan>* </RedSpan>phone:
    </Label>
    <CapitalizedInput
      type="number"
      name="phoneNumber"
      onChange={handleSignUpFormChange}
      required
    />
  </>
);

export default SignUpPhoneNumber;
