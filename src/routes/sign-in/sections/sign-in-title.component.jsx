import Balancer from "react-wrap-balancer";

import useGetSignInFormSelectors from "../../../hooks/get-selectors/use-get-sign-in-form-selectors";

import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackTitle } from "../../../styles/h1/h1.styles";

const SignInTitle = () => {
  const { showSocialSignInForm } = useGetSignInFormSelectors();

  return (
    <ParentDiv>
      <Balancer>
        <BlackTitle>
          {!showSocialSignInForm
            ? "sign in with email"
            : "sign in with a social account"}
        </BlackTitle>
      </Balancer>
    </ParentDiv>
  );
};

export default SignInTitle;
