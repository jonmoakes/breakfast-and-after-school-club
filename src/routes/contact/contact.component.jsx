import { useSelector } from "react-redux";

import useSendContactFormMessageResultSwal from "./contact-form-hooks/use-send-contact-form-message-result-swal";

import { selectContactFormSelectors } from "../../store/contact-form/contact-form.slice";

import Loader from "../../components/loader/loader.component";
import ContactForm from "./sections/contact-form.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const Contact = () => {
  useSendContactFormMessageResultSwal();

  const { contactFormIsLoading } = useSelector(selectContactFormSelectors);

  return (
    <Container>
      {contactFormIsLoading ? <Loader /> : null}

      <ParentDiv>
        <BlackTitle>contact us</BlackTitle>
      </ParentDiv>

      <ContactForm />
    </Container>
  );
};

export default Contact;
