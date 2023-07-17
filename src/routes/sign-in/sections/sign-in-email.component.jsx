import { useSelector } from "react-redux";

import { selectSignInFormDetails } from "../../../store/sign-in-form/sign-in-form.selector";

import { LowercasedInput, Label } from "../../../styles/form/form.styles";

import { enterEmailAddress } from "../../../strings/strings";

const SignInEmail = ({ handleSignInFormChange }) => {
  const signInformDetails = useSelector(selectSignInFormDetails);

  const { email } = signInformDetails;

  return (
    <>
      <Label>email:</Label>
      <LowercasedInput
        type="email"
        name="email"
        value={email || ""}
        onChange={handleSignInFormChange}
        placeholder={enterEmailAddress}
        required
      />
    </>
  );
};

export default SignInEmail;
