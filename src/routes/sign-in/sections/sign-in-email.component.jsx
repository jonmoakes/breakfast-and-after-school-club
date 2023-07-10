import { LowercasedInput, Label } from "../../../styles/form/form.styles";

import { enterEmailAddress } from "../../../strings/strings";

const SignInEmail = ({ handleSignInFormChange }) => {
  return (
    <>
      <Label>email:</Label>
      <LowercasedInput
        type="email"
        name="email"
        onChange={handleSignInFormChange}
        placeholder={enterEmailAddress}
        required
      />
    </>
  );
};

export default SignInEmail;
