import useSignUpFormActions from "../../../hooks/get-actions-and-thunks/use-sign-up-form-actions";

import { CapitalizedInput, Label } from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const SignUpSchoolCode = () => {
  const { dispatchHandleSignUpFormChange } = useSignUpFormActions();

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
