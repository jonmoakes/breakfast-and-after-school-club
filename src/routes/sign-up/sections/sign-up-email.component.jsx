import { LowercasedInput, Label } from "../../../styles/form/form.styles";

const SignUpEmail = ({ handleSignUpFormChange }) => (
  <>
    <Label>email:</Label>
    <LowercasedInput
      type="email"
      name="email"
      onChange={handleSignUpFormChange}
      required
    />
  </>
);

export default SignUpEmail;
