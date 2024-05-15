import { useState } from "react";

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
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { StyledLink } from "../../../styles/link/link.styles";
import { signInRoute } from "../../../strings/routes/routes-strings";

const ContactForm = () => {
  useSetContactFormNameAndEmailIfSignedIn();
  const { currentUser, email, appOwnerEmail } = useGetCurrentUserSelectors();
  const { message } = useGetContactFormSelectors();
  const { dispatchHandleContactFormDetailsChange } = useContactFormActions();

  const [confirm, setConfirm] = useState(false);

  console.log(email, appOwnerEmail);

  return (
    <ParentDiv>
      {!currentUser && !confirm ? (
        <>
          <Text>
            if you are already a user of the app, please make sure that you are{" "}
            <StyledLink to={signInRoute}>signed in</StyledLink> before sending
            your message. This will make sure that your email reaches the
            correct school.
          </Text>

          <Text>
            you shouldn't need to use this contact form without being signed in
            unless you are a breakfast and after school club owner in the UK who
            wants some more information about the app :)
          </Text>
          <YellowGreenButton onClick={() => setConfirm(true)}>
            ok
          </YellowGreenButton>
        </>
      ) : null}

      {confirm || currentUser ? (
        <>
          <Text>
            <RedSpan>* </RedSpan> = required field:
          </Text>

          {email !== appOwnerEmail ? <ContactFormAccordion /> : null}

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
        </>
      ) : null}
    </ParentDiv>
  );
};

export default ContactForm;
