import { SocialLoginsDiv, TopMarginDiv } from "../../styles/div/div.styles";
import { SocialImage } from "../../styles/image/image.styles";
import { HorizLine } from "../../styles/span/span.styles";

import FBLogo from "../../assets/fb-logo.png";
import TwitterLogo from "../../assets/twitter-logo.png";
import GoogleLogo from "../../assets/google-logo.png";
import { BlackHr } from "../../styles/hr/hr.styles";

const SocialLogins = () => {
  return (
    <>
      <TopMarginDiv>
        <HorizLine>or continue with:</HorizLine>
      </TopMarginDiv>
      <SocialLoginsDiv>
        <SocialImage src={FBLogo} />
        <SocialImage src={TwitterLogo} />
        <SocialImage src={GoogleLogo} />
      </SocialLoginsDiv>
      <BlackHr />
    </>
  );
};

export default SocialLogins;
