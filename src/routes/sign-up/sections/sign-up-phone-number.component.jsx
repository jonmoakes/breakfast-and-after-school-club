import { CapitalizedInput, Label } from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const SignUpPhoneNumber = ({ dispatchHandleSignUpFormChange }) => {
  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>phone:
      </Label>
      <CapitalizedInput
        type="number"
        name="phoneNumber"
        onChange={dispatchHandleSignUpFormChange}
        required
      />
    </>
  );
};

export default SignUpPhoneNumber;
