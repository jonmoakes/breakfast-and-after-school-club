import Balancer from "react-wrap-balancer";

import useGetUpdateEmailSelectors from "../../hooks/get-selectors/use-get-update-email-selectors";

import Loader from "../../components/loader/loader.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const TitleAndLoader = () => {
  const { updateEmailIsLoading } = useGetUpdateEmailSelectors();

  return (
    <>
      {updateEmailIsLoading ? <Loader /> : null}
      <ParentDiv>
        <BlackTitle>
          <Balancer>update your email address</Balancer>
        </BlackTitle>
      </ParentDiv>
    </>
  );
};

export default TitleAndLoader;
