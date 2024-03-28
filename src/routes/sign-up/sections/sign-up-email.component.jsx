import { LowercasedInput, Label } from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const SignUpEmail = ({ dispatchHandleSignUpFormChange }) => {
  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>email:
      </Label>
      <LowercasedInput
        type="email"
        name="email"
        onChange={dispatchHandleSignUpFormChange}
        required
      />
    </>
  );
};

export default SignUpEmail;
