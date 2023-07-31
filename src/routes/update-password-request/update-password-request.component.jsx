import { useSelector } from "react-redux";
import Balancer from "react-wrap-balancer";

import { selectIsLoading } from "../../store/loader/loader.selector";

import Loader from "../../components/loader/loader.component";
import Info from "./info.component";
import UpdatePasswordRequestButton from "./update-password-request-button.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const UpdatePasswordRequest = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <Container>
      {isLoading ? <Loader /> : null}
      <ParentDiv>
        <BlackTitle>
          <Balancer>update password request</Balancer>
        </BlackTitle>
      </ParentDiv>

      <ParentDiv>
        <Info />
        <UpdatePasswordRequestButton />
      </ParentDiv>
    </Container>
  );
};

export default UpdatePasswordRequest;
