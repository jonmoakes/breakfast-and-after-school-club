import useSignUpFormActions from "../../../hooks/get-actions-and-thunks/use-sign-up-form-actions";

import { CapitalizedInput, Label } from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const SignUpName = () => {
  const { dispatchHandleSignUpFormChange } = useSignUpFormActions();

  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>name:
      </Label>
      <CapitalizedInput
        type="text"
        name="name"
        onChange={dispatchHandleSignUpFormChange}
        required
      />
    </>
  );
};

export default SignUpName;
