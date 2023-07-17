import { account } from "../../utils/appwrite/appwrite-config";
import { SocialLoginsDiv, TopMarginDiv } from "../../styles/div/div.styles";
import { SocialImage } from "../../styles/image/image.styles";
import { HorizLine } from "../../styles/span/span.styles";

import FBLogo from "../../assets/fb-logo.png";
import GoogleLogo from "../../assets/google-logo.png";
import { BlackHr } from "../../styles/hr/hr.styles";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const SocialLogins = () => {
  // const [user, setUser] = useState();
  const dispatch = useDispatch();
  const signInWithGoogle = () => {
    account.createOAuth2Session(
      "google",
      "https://breakfast-and-after-school-club.netlify.app",
      "https://breakfast-and-after-school-club.netlify.app/sign-in"
    );

    // const
  };

  // useEffect(() => {
  //   console.log(user);
  // }, [user]);
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
