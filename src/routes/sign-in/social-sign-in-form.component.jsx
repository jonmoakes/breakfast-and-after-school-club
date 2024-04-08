import SocialSignInAccordion from "./sections/social-sign-in/social-sign-in-accordion.component";
import SocialSignInInput from "./sections/social-sign-in/social-sign-in-input.component";
import SocialSignInInstructions from "./sections/social-sign-in/social-sign-in-instructions.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { useEffect } from "react";

import { scrollToTop } from "../../functions/scroll-top-top";

const SocialSignInForm = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <ParentDiv>
        <SocialSignInAccordion />
      </ParentDiv>

      <ParentDiv>
        <SocialSignInInstructions />
        <SocialSignInInput />
      </ParentDiv>
    </>
  );
};

export default SocialSignInForm;
