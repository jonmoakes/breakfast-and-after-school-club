import { CapitalizedInput, Label } from "../../../styles/form/form.styles";

const SignUpName = ({ handleSignUpFormChange }) => (
  <>
    <Label>name:</Label>
    <CapitalizedInput
      type="text"
      name="name"
      onChange={handleSignUpFormChange}
      required
    />
  </>
);

export default SignUpName;
