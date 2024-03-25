import Balancer from "react-wrap-balancer";

import useGetGenerateNewPasswordRequestSelectors from "../../hooks/get-selectors/use-get-generate-new-password-request-selectors";

import Loader from "../../components/loader/loader.component";

import { BlackTitle } from "../../styles/h1/h1.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const TitleAndLoader = () => {
  const { generateNewPasswordRequestIsLoading } =
    useGetGenerateNewPasswordRequestSelectors();

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
