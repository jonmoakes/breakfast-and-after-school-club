import { useSelector } from "react-redux";

import useIsOnline from "../../hooks/use-is-online";

import { selectIsLoading } from "../../store/loader/loader.selector";

import Loader from "../../components/loader/loader.component";
import NetworkError from "../../components/errors/network-error.component";
import ContactForm from "./contact-form.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv, InnerDiv } from "../../styles/div/div.styles";

const Contact = () => {
  const { isOnline } = useIsOnline();

  const isLoading = useSelector(selectIsLoading);

  return (
    <Container>
      {isLoading && <Loader />}
      {!isOnline && <NetworkError />}

      <ParentDiv>
        <InnerDiv className="clear-bg">
          <h1>contact us</h1>
        </InnerDiv>
      </ParentDiv>

      <ParentDiv>
        <ContactForm {...{ isOnline, isLoading }} />
      </ParentDiv>
    </Container>
  );
};

export default Contact;
