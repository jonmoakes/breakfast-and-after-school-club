import { LowercasedInput, Label } from "../../../styles/form/form.styles";

import { enterEmailAddress } from "../../../strings/strings";

const SignUpEmail = ({ handleSignUpFormChange }) => (
  <>
    <Label>email:</Label>
    <LowercasedInput
      type="email"
      name="email"
      onChange={handleSignUpFormChange}
      placeholder={enterEmailAddress}
      required
    />
  </>
);

export default SignUpEmail;
