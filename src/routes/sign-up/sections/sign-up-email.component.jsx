import { useSelector } from "react-redux";

import { selectSignUpFormDetails } from "../../../store/sign-up-form/sign-up-form.selector";

import { LowercasedInput, Label } from "../../../styles/form/form.styles";

import { enterEmailAddress } from "../../../strings/strings";

const SignUpEmail = ({ handleSignUpFormChange }) => {
  const signUpFormDetails = useSelector(selectSignUpFormDetails);

  const { email } = signUpFormDetails;

  return (
    <>
      <Label>email:</Label>
      <LowercasedInput
        type="email"
        name="email"
        value={email || ""}
        onChange={handleSignUpFormChange}
        placeholder={enterEmailAddress}
        required
      />
    </>
  );
};

export default SignUpEmail;
