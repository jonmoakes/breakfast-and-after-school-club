import { CapitalizedInput, Label } from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const SignUpSchoolCode = ({ handleSignUpFormChange }) => (
  <>
    <Label>
      <RedSpan>* </RedSpan>school code:
    </Label>
    <CapitalizedInput
      type="text"
      name="schoolCode"
      onChange={handleSignUpFormChange}
      required
    />
  </>
);

export default SignUpSchoolCode;
