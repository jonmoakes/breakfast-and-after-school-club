import { useSelector } from "react-redux";

import { selectSignInFormDetails } from "../../../store/sign-in-form/sign-in-form.selector";

import { LowercasedInput, Label } from "../../../styles/form/form.styles";

const SignInSchoolCode = ({ handleSignInFormChange }) => {
  const signInformDetails = useSelector(selectSignInFormDetails);

  const { schoolCode } = signInformDetails;

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
