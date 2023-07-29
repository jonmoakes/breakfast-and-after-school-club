import { useSelector } from "react-redux";
import Balancer from "react-wrap-balancer";

import { selectIsLoading } from "../../store/loader/loader.selector";

import Loader from "../../components/loader/loader.component";
import Info from "./info.component";
import NewEmail from "./new-email.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const UpdateEmail = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <Container>
      {isLoading ? <Loader /> : null}
      <ParentDiv>
        <BlackTitle>
          <Balancer>update your email address</Balancer>
        </BlackTitle>
      </ParentDiv>

      <ParentDiv>
        <Info />
        <NewEmail />
      </ParentDiv>
    </Container>
  );
};

export default UpdateEmail;
