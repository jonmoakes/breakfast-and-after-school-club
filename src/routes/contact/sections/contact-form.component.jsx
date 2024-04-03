import useContactFormActions from "../../../hooks/get-actions-and-thunks/contact-form-actions-and-thunks/use-contact-form-actions";
import useGetContactFormSelectors from "../../../hooks/get-selectors/use-get-contact-form-selectors";
import useSetContactFormNameAndEmailIfSignedIn from "../contact-form-hooks/use-set-contact-form-name-and-email-if-signed-in";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";

import NameAndEmail from "./name-and-email.component";
import SendMessageButton from "./send-message-button.component";

import { Form, StyledTextArea, Label } from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import ContactFormAccordion from "./contact-form-accordion.component";

const ContactForm = () => {
  useSetContactFormNameAndEmailIfSignedIn();
  const { currentUser } = useGetCurrentUserSelectors();
  const { message } = useGetContactFormSelectors();
  const { dispatchHandleContactFormDetailsChange } = useContactFormActions();

  return (
    <ParentDiv>
      {!currentUser ? (
        <Text>
          if you are already a user of the app, please make sure that you are
          signed in before sending your message. This will make sure that your
          email reaches the correct recipient.
        </Text>
      ) : null}

      <Text>
        <RedSpan>* </RedSpan> = required field:
      </Text>

      <ContactFormAccordion />

      <Form>
        <NameAndEmail />
        <Label>
          <RedSpan>* </RedSpan>Your Message:
        </Label>
        <StyledTextArea
          type="text"
          name="message"
          onChange={dispatchHandleContactFormDetailsChange}
          value={message || ""}
        />
        <SendMessageButton />
      </Form>
    </ParentDiv>
  );
};

export default ContactForm;
