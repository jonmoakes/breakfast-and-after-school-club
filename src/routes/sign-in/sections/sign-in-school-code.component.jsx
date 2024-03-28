import useGetSignInFormSelectors from "../../../hooks/get-selectors/use-get-sign-in-form-selectors";

import { Label, StyledInput } from "../../../styles/form/form.styles";

const SignInSchoolCode = ({ dispatchHandleSignInFormChange }) => {
  const { schoolCode } = useGetSignInFormSelectors();

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
