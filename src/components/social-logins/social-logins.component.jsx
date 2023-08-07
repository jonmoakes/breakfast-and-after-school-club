import { useDispatch } from "react-redux";

import useIsOnline from "../../hooks/use-is-online";

import {
  requestFacebookSignInAsync,
  requestGoogleSignInAsync,
} from "../../store/user/user.actions";

import SocialLoginsInfo from "./social-logins-info.component";

import { SocialLoginsDiv, TopMarginDiv } from "../../styles/div/div.styles";
import { SocialImage } from "../../styles/image/image.styles";
import { HorizLine } from "../../styles/span/span.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import FBLogo from "../../assets/fb-logo.png";
import GoogleLogo from "../../assets/google-logo.png";

const SocialLogins = () => {
  const { isOnline } = useIsOnline();

  const dispatch = useDispatch();

  return (
    <>
      {isOnline ? (
        <>
          <TopMarginDiv>
            <HorizLine>or continue with:</HorizLine>
          </TopMarginDiv>

          <SocialLoginsDiv>
            <SocialImage
              className="fb"
              onClick={() => dispatch(requestFacebookSignInAsync())}
              src={FBLogo}
            />
            <SocialImage
              onClick={() => dispatch(requestGoogleSignInAsync())}
              src={GoogleLogo}
            />
          </SocialLoginsDiv>

          <SocialLoginsInfo />
          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default SocialLogins;
