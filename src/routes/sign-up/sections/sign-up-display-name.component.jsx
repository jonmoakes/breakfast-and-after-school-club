import { CapitalizedInput, Label } from "../../../styles/form/form.styles";
import { enterDisplayName } from "../../../strings/strings";

const SignUpDisplayName = ({ handleSignUpFormChange }) => (
  <>
    <Label>display name:</Label>
    <CapitalizedInput
      type="text"
      name="name"
      onChange={handleSignUpFormChange}
      placeholder={enterDisplayName}
      required
    />
  </>
);

export default SignUpDisplayName;
