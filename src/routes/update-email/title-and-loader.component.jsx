import { useSelector } from "react-redux";
import Balancer from "react-wrap-balancer";

import { selectUpdateEmailIsLoading } from "../../store/update-email/update-email.selector";

import Loader from "../../components/loader/loader.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const TitleAndLoader = () => {
  const isLoading = useSelector(selectUpdateEmailIsLoading);

  return (
    <>
      {isLoading ? <Loader /> : null}
      <ParentDiv>
        <BlackTitle>
          <Balancer>update your email address</Balancer>
        </BlackTitle>
      </ParentDiv>
    </>
  );
};

export default TitleAndLoader;
