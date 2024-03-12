import { useSelector } from "react-redux";

import useSignInWithSocials from "./social-sign-in-hooks/use-sign-in-wth-socials";

import { selectCurrentUserSelectors } from "../../store/user/user.slice";

import FBLogo from "../../assets/fb-logo.jpg";
import GoogleLogo from "../../assets/google-logo.jpg";

import { SocialLoginsDiv } from "../../styles/div/div.styles";
import { SocialImage } from "../../styles/image/image.styles";

const SocialSignInButtons = () => {
  const { signInWithFacebook, signInWithGoogle } = useSignInWithSocials();

  const { schoolCodeForSocialLogin } = useSelector(selectCurrentUserSelectors);

  return (
    <>
      {schoolCodeForSocialLogin ? (
        <>
          <SocialLoginsDiv>
            <SocialImage
              className="fb"
              onClick={signInWithFacebook}
              src={FBLogo}
            />
            <SocialImage onClick={signInWithGoogle} src={GoogleLogo} />
          </SocialLoginsDiv>
        </>
      ) : null}
    </>
  );
};

export default SocialSignInButtons;
