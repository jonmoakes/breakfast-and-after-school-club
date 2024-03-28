import useSignInFormActions from "../../../hooks/get-actions-and-thunks/use-sign-in-form-actions";
import useGetSignInFormSelectors from "../../../hooks/get-selectors/use-get-sign-in-form-selectors";

import { Label, StyledInput } from "../../../styles/form/form.styles";

const SignInSchoolCode = () => {
  const { schoolCode } = useGetSignInFormSelectors();
  const { dispatchHandleSignInFormChange } = useSignInFormActions();

  return (
    <>
      <Label>school code:</Label>
      <StyledInput
        type="text"
        name="schoolCode"
        value={schoolCode || ""}
        onChange={dispatchHandleSignInFormChange}
        required
      />
    </>
  );
};

export default SignInSchoolCode;
