import useGetSignInFormSelectors from "../../../hooks/get-selectors/use-get-sign-in-form-selectors";

import { LowercasedInput, Label } from "../../../styles/form/form.styles";

const SignInEmail = ({ dispatchHandleSignInFormChange }) => {
  const { email } = useGetSignInFormSelectors();

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
