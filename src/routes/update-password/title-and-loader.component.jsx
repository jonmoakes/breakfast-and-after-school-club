import { useSelector } from "react-redux";
import Balancer from "react-wrap-balancer";

import { selectGenerateNewPasswordRequestSelectors } from "../../store/generate-new-password-request/generate-new-password-request.slice";

import Loader from "../../components/loader/loader.component";

import { BlackTitle } from "../../styles/h1/h1.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const TitleAndLoader = () => {
  const { generateNewPasswordRequestIsLoading } = useSelector(
    selectGenerateNewPasswordRequestSelectors
  );

  return (
    <>
      {generateNewPasswordRequestIsLoading ? <Loader /> : null}
      <ParentDiv>
        <BlackTitle>
          <Balancer>update your password</Balancer>
        </BlackTitle>
      </ParentDiv>
    </>
  );
};

export default TitleAndLoader;
