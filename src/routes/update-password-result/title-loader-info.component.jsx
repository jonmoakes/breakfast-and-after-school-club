import { useSelector } from "react-redux";
import Balancer from "react-wrap-balancer";

import { selectUpdatePasswordResultIsLoading } from "../../store/update-password-result/update-password-result.selector";

import Loader from "../../components/loader/loader.component";

import { InnerDiv, ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";

const TitleLoaderInfo = () => {
  const isLoading = useSelector(selectUpdatePasswordResultIsLoading);

  return (
    <>
      {isLoading ? <Loader /> : null}
      <ParentDiv>
        <InnerDiv className="clear-bg">
          <BlackTitle>
            <Balancer>update your password</Balancer>
          </BlackTitle>
        </InnerDiv>
      </ParentDiv>

      <ParentDiv>
        <Text>enter in your new password, then retype it to confirm it.</Text>
        <Text>then tap the "update password" button when it appears.</Text>
      </ParentDiv>
    </>
  );
};

export default TitleLoaderInfo;
