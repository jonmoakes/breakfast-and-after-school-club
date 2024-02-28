import { useSelector } from "react-redux";

import { selectSignInFormSelectors } from "../../../store/sign-in-form/sign-in-form.slice";

import { LowercasedInput, Label } from "../../../styles/form/form.styles";

const SignInSchoolCode = ({ handleSignInFormChange }) => {
  const { signInFormDetails } = useSelector(selectSignInFormSelectors);

  const { schoolCode } = signInFormDetails;

  return (
    <>
      <Label>school code:</Label>
      <LowercasedInput
        type="text"
        name="schoolCode"
        value={schoolCode || ""}
        onChange={handleSignInFormChange}
        required
      />
    </>
  );
};

export default SignInSchoolCode;
