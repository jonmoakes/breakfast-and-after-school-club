import useGetSignInFormSelectors from "../../../hooks/get-selectors/use-get-sign-in-form-selectors";
import useSignInFormActions from "../../../hooks/get-actions-and-thunks/use-sign-in-form-actions";

import { LowercasedInput, Label } from "../../../styles/form/form.styles";

const SignInEmail = () => {
  const { email } = useGetSignInFormSelectors();
  const { dispatchHandleSignInFormChange } = useSignInFormActions();

  return (
    <>
      <Label>email:</Label>
      <LowercasedInput
        type="email"
        name="email"
        value={email || ""}
        onChange={dispatchHandleSignInFormChange}
        required
      />
    </>
  );
};

export default SignInEmail;
