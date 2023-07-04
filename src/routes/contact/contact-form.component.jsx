import useSendEmail from "./use-send-email";
import useHandleContactFormDetailsChange from "./use-handle-contact-form-details-change";

import {
  Form,
  LowercasedInput,
  CapitalizedInput,
  StyledTextArea,
  Label,
} from "../../styles/form/form.styles";
import {
  DisabledButton,
  ContactFormButton,
} from "../../styles/buttons/buttons.styles";
import { RedSpan } from "../../styles/span/span.styles";
import { Text } from "../../styles/p/p.styles";

const ContactForm = ({ isOnline, isLoading }) => {
  const { formFields, handleContactFormDetailsChange, resetFormFields } =
    useHandleContactFormDetailsChange();
  const { sendEmail } = useSendEmail();

  return (
    <>
      <Text>
        <RedSpan>* </RedSpan> = required
      </Text>
      <Form id="contact-form">
        <Label>
          <RedSpan>* </RedSpan>Your Name:
        </Label>
        <CapitalizedInput
          type="text"
          name="name"
          onChange={handleContactFormDetailsChange}
        />
        <Label>
          <RedSpan>* </RedSpan>Your Email:
        </Label>
        <LowercasedInput
          type="email"
          name="email"
          onChange={handleContactFormDetailsChange}
        />

        <Label>
          <RedSpan>* </RedSpan>Your Message:
        </Label>
        <StyledTextArea
          type="text"
          name="message"
          onChange={handleContactFormDetailsChange}
        />

        {isOnline && !isLoading ? (
          <ContactFormButton
            type="button"
            onClick={() => sendEmail(formFields, resetFormFields)}
          >
            Send Message
          </ContactFormButton>
        ) : (
          isOnline &&
          isLoading && <DisabledButton>please wait...</DisabledButton>
        )}
      </Form>
    </>
  );
};

export default ContactForm;
