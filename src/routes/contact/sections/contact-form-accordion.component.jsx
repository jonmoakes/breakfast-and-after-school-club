import { useSelector, useDispatch } from "react-redux";

import {
  hideElement,
  toggleShowElement,
  selectShouldShowElementSelectors,
} from "../../../store/should-show-element/should-show-element.slice";

import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import { RedSpan } from "../../../styles/span/span.styles";
import { StyledLink } from "../../../styles/link/link.styles";

import { updateEmailRoute } from "../../../strings/routes/routes-strings";

const ContactFormAccordion = () => {
  const {
    currentUserEmailForContactForm,
    currentUserNameForContactForm,
    currentUser,
  } = useGetCurrentUserSelectors();

  const { shouldShowElement } = useSelector(selectShouldShowElementSelectors);

  const dispatch = useDispatch();

  return (
    <>
      {currentUser ? (
        <Accordion {...{ shouldShowElement }}>
          <>
            <AccordionTitle
              {...{ shouldShowElement }}
              onClick={() => dispatch(toggleShowElement())}
            >
              <div>
                {shouldShowElement ? "ok, close" : "name and email info"}
              </div>
              <>{shouldShowElement ? "-" : "+"}</>
            </AccordionTitle>

            {shouldShowElement && (
              <AccordionContent>
                <Text>
                  to provide the app owner with your contact details, we will
                  use the name and email that you signed up with:
                  <br />
                  <RedSpan>{currentUserNameForContactForm}</RedSpan>
                  <br />
                  <RedSpan className="lowercased">
                    {currentUserEmailForContactForm}
                  </RedSpan>
                  <br />
                  You only need to enter your message.
                </Text>
                <Text>
                  if you wish different details to be used ( ie you want the
                  reply sent to a different email address ), please clearly
                  enter them in the message box below.
                </Text>
                <Text>or if you need to update your email address</Text>
                <Text>
                  <StyledLink to={updateEmailRoute}>tap here</StyledLink>
                </Text>
                <YellowGreenButton onClick={() => dispatch(hideElement())}>
                  Ok, Close
                </YellowGreenButton>
              </AccordionContent>
            )}
          </>
        </Accordion>
      ) : null}
    </>
  );
};

export default ContactFormAccordion;
