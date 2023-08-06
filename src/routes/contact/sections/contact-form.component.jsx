import { useSelector } from "react-redux";

import useHandleContactFormDetailsChange from "../contact-form-hooks/use-handle-contact-form-details-change";

import { selectContactFormDetails } from "../../../store/contact-form/contact-form.selector";

import SendMessageButton from "./send-message-button.component";

import {
  Form,
  LowercasedInput,
  CapitalizedInput,
  StyledTextArea,
  Label,
} from "../../../styles/form/form.styles";

import { RedSpan } from "../../../styles/span/span.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";

const ContactForm = () => {
  const { handleContactFormDetailsChange } =
    useHandleContactFormDetailsChange();

  const contactFormDetails = useSelector(selectContactFormDetails);
  const { name, email, message } = contactFormDetails;

  return (
    <ParentDiv>
      <Text>
        <RedSpan>* </RedSpan> = required field:
      </Text>

      <Form id="contact-form">
        <Label>
          <RedSpan>* </RedSpan>Your Name:
        </Label>
        <CapitalizedInput
          type="text"
          name="name"
          onChange={handleContactFormDetailsChange}
          value={name || ""}
        />

        <Label>
          <RedSpan>* </RedSpan>Your Email:
        </Label>
        <LowercasedInput
          type="email"
          name="email"
          onChange={handleContactFormDetailsChange}
          value={email || ""}
        />

        <Label>
          <RedSpan>* </RedSpan>Your Message:
        </Label>
        <StyledTextArea
          type="text"
          name="message"
          onChange={handleContactFormDetailsChange}
          value={message || ""}
        />

        <SendMessageButton />
      </Form>
    </ParentDiv>
  );
};

export default ContactForm;
