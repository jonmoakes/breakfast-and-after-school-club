import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";
import useCurrentUserActions from "../../hooks/get-actions-and-thunks/current-user-actions-and-thunks/use-current-user-actions";

import { Form, Label, StyledInput } from "../../styles/form/form.styles";
import { WhiteShadowText } from "../../styles/p/p.styles";

const SocialSignInInput = () => {
  const { schoolCodeForSocialLogin } = useGetCurrentUserSelectors();
  const { dispatchSetSchoolCodeForSocialLogin } = useCurrentUserActions();

  return (
    <Form>
      <Label>school code:</Label>
      <StyledInput
        type="text"
        name="schooolCode"
        onChange={dispatchSetSchoolCodeForSocialLogin}
        value={schoolCodeForSocialLogin || ""}
      />
      {schoolCodeForSocialLogin ? (
        <WhiteShadowText>choose your provider below</WhiteShadowText>
      ) : null}
    </Form>
  );
};

export default SocialSignInInput;
