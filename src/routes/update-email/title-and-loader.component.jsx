import { useSelector } from "react-redux";
import Balancer from "react-wrap-balancer";

import { selectUpdateEmailSelectors } from "../../store/update-email/update-email.slice";

import Loader from "../../components/loader/loader.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const TitleAndLoader = () => {
  const { updateEmailIsLoading } = useSelector(selectUpdateEmailSelectors);

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
