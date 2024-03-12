import { useSelector } from "react-redux";

import useSignInWithSocials from "./social-sign-in-hooks/use-sign-in-wth-socials";

import { selectCurrentUserSelectors } from "../../store/user/user.slice";

import { Form, Label, StyledInput } from "../../styles/form/form.styles";
import { WhiteShadowText } from "../../styles/p/p.styles";

const SocialSignInInput = () => {
  const { handleChangeForSchoolCode } = useSignInWithSocials();

  const { schoolCodeForSocialLogin } = useSelector(selectCurrentUserSelectors);

  return (
    <Form>
      <Label>school code:</Label>
      <StyledInput
        type="text"
        name="schooolCode"
        onChange={handleChangeForSchoolCode}
        value={schoolCodeForSocialLogin || ""}
      />
      {schoolCodeForSocialLogin ? (
        <WhiteShadowText>choose your provider below</WhiteShadowText>
      ) : null}
    </Form>
  );
};

export default SocialSignInInput;
