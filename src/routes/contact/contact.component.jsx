import { useSelector } from "react-redux";

import useIsOnline from "../../hooks/use-is-online";

import { selectIsLoading } from "../../store/loader/loader.selector";

import Loader from "../../components/loader/loader.component";
import NetworkError from "../../components/errors/network-error.component";
import ContactTitle from "./sections/contact-title.component";
import ContactForm from "./sections/contact-form.component";

import { Container } from "../../styles/container/container.styles";

const Contact = () => {
  const { isOnline } = useIsOnline();

  const isLoading = useSelector(selectIsLoading);

  return (
    <Container>
      {isLoading && <Loader />}
      {!isOnline && <NetworkError />}

      <ContactTitle />
      <ContactForm {...{ isOnline, isLoading }} />
    </Container>
  );
};

export default Contact;
