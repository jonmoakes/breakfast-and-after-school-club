import useSocialLogins from "./use-social-logins";
import useIsOnline from "../../hooks/use-is-online";

import SocialLoginsInfo from "./social-logins-info.component";

import { SocialLoginsDiv, TopMarginDiv } from "../../styles/div/div.styles";
import { SocialImage } from "../../styles/image/image.styles";
import { HorizLine } from "../../styles/span/span.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import FBLogo from "../../assets/fb-logo.png";
import GoogleLogo from "../../assets/google-logo.png";

const SocialLogins = () => {
  const { signInWithGoogle, signInWithFacebook } = useSocialLogins();
  const { isOnline } = useIsOnline();

  return (
    <>
      {isOnline ? (
        <>
          <TopMarginDiv>
            <HorizLine>or continue with:</HorizLine>
          </TopMarginDiv>

          <SocialLoginsDiv>
            <SocialImage onClick={signInWithFacebook} src={FBLogo} />
            <SocialImage onClick={signInWithGoogle} src={GoogleLogo} />
          </SocialLoginsDiv>

          <SocialLoginsInfo />
          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default SocialLogins;
