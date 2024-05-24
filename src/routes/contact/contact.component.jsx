import useSendContactFormMessageResultSwal from "./contact-form-hooks/use-send-contact-form-message-result-swal";
import useGetContactFormSelectors from "../../hooks/get-selectors/use-get-contact-form-selectors";

import Loader from "../../components/loader/loader.component";
import ContactForm from "./sections/contact-form.component";
import Footer from "../../components/footer/footer.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const Contact = () => {
  const { contactFormIsLoading } = useGetContactFormSelectors();
  useSendContactFormMessageResultSwal();

  return (
    <Container>
      {contactFormIsLoading ? <Loader /> : null}

      <ParentDiv>
        <BlackTitle>contact us</BlackTitle>
      </ParentDiv>

      <ContactForm />
      <Footer />
    </Container>
  );
};

export default Contact;
