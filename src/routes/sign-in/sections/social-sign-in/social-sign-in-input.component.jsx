import useGetCurrentUserSelectors from "../../../../hooks/get-selectors/use-get-current-user-selectors";
import useCurrentUserActions from "../../../../hooks/get-actions-and-thunks/current-user-actions-and-thunks/use-current-user-actions";

import { Form, Label, StyledInput } from "../../../../styles/form/form.styles";
import { Text, WhiteShadowText } from "../../../../styles/p/p.styles";
import { YellowGreenButton } from "../../../../styles/buttons/buttons.styles";
import useSignInFormActions from "../../../../hooks/get-actions-and-thunks/use-sign-in-form-actions";
import SocialSignInButtons from "./social-sign-in-buttons.component";

const SocialSignInInput = () => {
  const { schoolCodeForSocialLogin } = useGetCurrentUserSelectors();
  const {
    dispatchSetSchoolCodeForSocialLogin,
    dispatchResetSchoolCodeForSocialLogin,
  } = useCurrentUserActions();
  const { dispatchShowSocialSignIn } = useSignInFormActions();

  const showEmailSignInAndResetSchoolCode = () => {
    dispatchShowSocialSignIn(false);
    dispatchResetSchoolCodeForSocialLogin();
  };

  return (
    <Form>
      <Label>school code:</Label>
      <StyledInput
        type="text"
        name="schoolCode"
        onChange={dispatchSetSchoolCodeForSocialLogin}
        value={schoolCodeForSocialLogin || ""}
      />
      {schoolCodeForSocialLogin ? (
        <WhiteShadowText>choose your provider below</WhiteShadowText>
      ) : null}

      <SocialSignInButtons />

      <Text>or</Text>

      <YellowGreenButton onClick={showEmailSignInAndResetSchoolCode}>
        sign in with email
      </YellowGreenButton>
    </Form>
  );
};

export default SocialSignInInput;
