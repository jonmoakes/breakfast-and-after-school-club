import { useSelector } from "react-redux";
import Balancer from "react-wrap-balancer";

import { selectUpdatePasswordRequestIsLoading } from "../../store/update-password-request/update-password-request.selector";

import Loader from "../../components/loader/loader.component";

import { BlackTitle } from "../../styles/h1/h1.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const TitleAndLoader = () => {
  const isLoading = useSelector(selectUpdatePasswordRequestIsLoading);

  return (
    <>
      {isLoading ? <Loader /> : null}
      <ParentDiv>
        <BlackTitle>
          <Balancer>update password request</Balancer>
        </BlackTitle>
      </ParentDiv>
    </>
  );
};

export default TitleAndLoader;
