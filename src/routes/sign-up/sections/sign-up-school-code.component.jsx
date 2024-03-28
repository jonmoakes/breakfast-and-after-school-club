import { CapitalizedInput, Label } from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const SignUpSchoolCode = ({ dispatchHandleSignUpFormChange }) => {
  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>school code:
      </Label>
      <CapitalizedInput
        type="text"
        name="schoolCode"
        onChange={dispatchHandleSignUpFormChange}
        required
      />
    </>
  );
};

export default SignUpSchoolCode;
