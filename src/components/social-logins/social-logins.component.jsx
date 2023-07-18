import { useDispatch, useSelector } from "react-redux";
import {
  signInGoogleAsync,
  signInFacebookAsync,
} from "../../store/user/user.slice";

import { selectIsLoading } from "../../store/user/user.selector";

import Loader from "../loader/loader.component";

import { SocialLoginsDiv, TopMarginDiv } from "../../styles/div/div.styles";
import { SocialImage } from "../../styles/image/image.styles";
import { HorizLine } from "../../styles/span/span.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import FBLogo from "../../assets/fb-logo.png";
import GoogleLogo from "../../assets/google-logo.png";

const SocialLogins = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const signInWithGoogle = async () => {
    dispatch(signInGoogleAsync());
  };

  const signInWithFacebook = async () => {
    dispatch(signInFacebookAsync());
  };

  return (
    <>
      {isLoading ? <Loader /> : null}
      <TopMarginDiv>
        <HorizLine>or continue with:</HorizLine>
      </TopMarginDiv>

      <SocialLoginsDiv>
        <SocialImage onClick={signInWithFacebook} src={FBLogo} />
        <SocialImage onClick={signInWithGoogle} src={GoogleLogo} />
      </SocialLoginsDiv>
      <BlackHr />
    </>
  );
};

export default SocialLogins;
