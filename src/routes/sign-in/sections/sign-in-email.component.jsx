import { useSelector } from "react-redux";

import { selectSignInFormSelectors } from "../../../store/sign-in-form/sign-in-form.slice";

import { LowercasedInput, Label } from "../../../styles/form/form.styles";

const SignInEmail = ({ handleSignInFormChange }) => {
  const { signInFormDetails } = useSelector(selectSignInFormSelectors);
  const { email } = signInFormDetails;

  return (
    <>
      <Label>email:</Label>
      <LowercasedInput
        type="email"
        name="email"
        value={email || ""}
        onChange={handleSignInFormChange}
        required
      />
    </>
  );
};

export default SignInEmail;
