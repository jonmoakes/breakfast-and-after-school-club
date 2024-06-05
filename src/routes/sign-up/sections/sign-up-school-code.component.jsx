import { StyledInput, Label } from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const SignUpSchoolCode = ({ dispatchHandleSignUpFormChange }) => {
  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>school code:
      </Label>
      <StyledInput
        type="text"
        name="schoolCode"
        onChange={dispatchHandleSignUpFormChange}
        placeholder="contact school for code"
        required
      />
    </>
  );
};

export default SignUpSchoolCode;
