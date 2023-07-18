import useSendEmail from "../contact-form-hooks/use-send-email";
import useHandleContactFormDetailsChange from "../contact-form-hooks/use-handle-contact-form-details-change";

import {
  Form,
  LowercasedInput,
  CapitalizedInput,
  StyledTextArea,
  Label,
} from "../../../styles/form/form.styles";
import {
  DisabledButton,
  YellowGreenButton,
} from "../../../styles/buttons/buttons.styles";
import { RedSpan } from "../../../styles/span/span.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const ContactForm = ({ isOnline, isLoading }) => {
  const { handleContactFormDetailsChange } =
    useHandleContactFormDetailsChange();
  const { sendEmail } = useSendEmail();

  return (
    <ParentDiv>
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

        <BlackHr />

        {isOnline && !isLoading ? (
          <YellowGreenButton type="button" onClick={sendEmail}>
            Send Message
          </YellowGreenButton>
        ) : (
          isOnline &&
          isLoading && <DisabledButton>please wait...</DisabledButton>
        )}
      </Form>
    </ParentDiv>
  );
};

export default ContactForm;
