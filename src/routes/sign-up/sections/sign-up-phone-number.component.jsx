import useSignUpFormActions from "../../../hooks/get-actions-and-thunks/use-sign-up-form-actions";

import { CapitalizedInput, Label } from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const SignUpPhoneNumber = () => {
  const { dispatchHandleSignUpFormChange } = useSignUpFormActions();

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
