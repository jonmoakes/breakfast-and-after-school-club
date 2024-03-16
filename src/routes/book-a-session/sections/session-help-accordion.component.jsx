import useGetSessionTypesAndPrices from "../book-a-session-hooks/get-session-types-and-prices/use-get-session-types-and-prices";
import useShouldShowElementActions from "../../../hooks/get-actions/use-should-show-element-actions";
import useShouldShowElementSelectors from "../../../hooks/get-selectors/use-should-show-element-selectors";

import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { StyledLink } from "../../../styles/link/link.styles";

import { bookedSessionsUserRoute } from "../../../strings/routes/routes-strings";

const SessionHelpAccordion = () => {
  const { showOppositeShowElement, hideShownElement } =
    useShouldShowElementActions();
  const { morningSessionPriceToFixed } = useGetSessionTypesAndPrices();
  const { shouldShowElement } = useShouldShowElementSelectors();

  return (
    <Accordion {...{ shouldShowElement }}>
      <>
        <AccordionTitle
          {...{ shouldShowElement }}
          onClick={showOppositeShowElement}
        >
          <div>{shouldShowElement ? "ok, close" : "booking sessions help"}</div>
          <>{shouldShowElement ? "-" : "+"}</>
        </AccordionTitle>

        {shouldShowElement && (
          <AccordionContent>
            <Text>
              to book a session, choose a date by tapping on the date picker box
              below.
            </Text>
            <Text>
              if you have more than one child added into our database, you will
              then be prompted to select which children you are booking the
              session for.
            </Text>
            <Text>tap on the corresponding checkbox to add your children.</Text>
            <Text>then, choose which session you want to book.</Text>
            <Text>
              the options that will show will depend on your wallet balance and
              what spaces we have available on your chosen day.
            </Text>
            <Text>
              for example, if you have £{morningSessionPriceToFixed} in your
              wallet, you would not see the options to select the afternoon long
              session, or the combined morning and afternoon sessions as their
              price is greater that £{morningSessionPriceToFixed}.
            </Text>
            <Text>
              also if we have no spaces for a particular session, you will not
              see the option to book it, even if you have enough funds in your
              account.
            </Text>
            <Text>
              for example, if we have no afternoon sessions available for the
              day you have selected, then you will only see the morning session
              button.
            </Text>
            <Text>
              the sessions are updated in realtime. If we have no sessions
              available, please check back regularly as if we have a
              cancellation, the session will become available to book again.
            </Text>
            <Text>
              if we have no availability at all on your chosen day, you will
              clearly be informed on screen.
            </Text>
            <Text>
              tap on the button of the session you wish to book. you will
              receive a confirmation of the session you wish to book and the
              cost that will be deducted from your balance.
            </Text>
            <Text>
              if you're happy, tap the "i'm sure" button and the funds will be
              decucted from your wallet and the session will be booked.
            </Text>
            <Text>
              you can then see all of your bookings on your{" "}
              <StyledLink to={bookedSessionsUserRoute}>
                bookings page
              </StyledLink>
              , where you will be able to view the details of your booking, or
              cancel it.
            </Text>
            <Text>
              you will also be emailed a confirmation of what you have booked.
            </Text>
            <YellowGreenButton onClick={hideShownElement}>
              Ok, Close
            </YellowGreenButton>
          </AccordionContent>
        )}
      </>
    </Accordion>
  );
};

export default SessionHelpAccordion;
