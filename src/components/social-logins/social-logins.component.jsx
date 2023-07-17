import { useDispatch } from "react-redux";
import { signInGoogleAsync } from "../../store/user/user.slice";

import { SocialLoginsDiv, TopMarginDiv } from "../../styles/div/div.styles";
import { SocialImage } from "../../styles/image/image.styles";
import { HorizLine } from "../../styles/span/span.styles";

import FBLogo from "../../assets/fb-logo.png";
import GoogleLogo from "../../assets/google-logo.png";
import { BlackHr } from "../../styles/hr/hr.styles";

const SocialLogins = () => {
  const dispatch = useDispatch();

  const signInWithGoogle = async () => {
    dispatch(signInGoogleAsync());
  };

  return (
    <>
      <TopMarginDiv>
        <HorizLine>or continue with:</HorizLine>
      </TopMarginDiv>
      <SocialLoginsDiv>
        <SocialImage src={FBLogo} />
        <SocialImage onClick={signInWithGoogle} src={GoogleLogo} />
      </SocialLoginsDiv>
      <BlackHr />
    </>
  );
};

export default SocialLogins;
