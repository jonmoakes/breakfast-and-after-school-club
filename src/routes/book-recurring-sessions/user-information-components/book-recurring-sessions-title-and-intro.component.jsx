import useGetShouldShowElementSelectors from "../../../hooks/get-selectors/use-get-should-show-element-selectors";
import useShouldShowElementActions from "../../../hooks/get-actions-and-thunks/use-should-show-element-actions";
import useBookRecurringSessionsVariables from "../hooks/use-book-recurring-sessions-variables";

import WalletBalance from "../../../components/wallet-balance/wallet-balance.component";

import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackTitle } from "../../../styles/h1/h1.styles";
import Balancer from "react-wrap-balancer";

const BookRecurringSessionsTitleAndIntro = () => {
  const { monthAsString } = useBookRecurringSessionsVariables();
  const { shouldShowElement } = useGetShouldShowElementSelectors();
  const { dispatchShowOppositeShowElement, dispatchHideShownElement } =
    useShouldShowElementActions();

  return (
    <>
      <ParentDiv>
        <BlackTitle>
          <Balancer>
            book recurring sessions for <RedSpan>{monthAsString}</RedSpan>
          </Balancer>
        </BlackTitle>
      </ParentDiv>

      <ParentDiv>
        <WalletBalance />
        <Accordion {...{ shouldShowElement }}>
          <>
            <AccordionTitle
              {...{ shouldShowElement }}
              onClick={dispatchShowOppositeShowElement}
            >
              <div>{shouldShowElement ? "ok, close" : "important info"}</div>
              <>{shouldShowElement ? "-" : "+"}</>
            </AccordionTitle>

            {shouldShowElement && (
              <AccordionContent>
                <Text>
                  here, you can book a recurring day and session for{" "}
                  <RedSpan>{monthAsString}</RedSpan>.
                </Text>
                <Text>
                  you can only book one day and session in the month at a time,
                  so please book each day and session as necessary.
                </Text>
                <Text>
                  for example, if you want every monday in the morning, and
                  every thursday in the afternoon, choose the 'monday' button
                  and then tap the 'morning' button.
                </Text>
                <Text>
                  once you have seen what dates we have spaces available on and
                  confirmed, those sessions will be booked.
                </Text>
                <Text>
                  then, repeat the process but choose 'thursday' as your day and
                  'afternoon' as your session.
                </Text>
                <Text>
                  view and confirm the dates and then all of monday morning and
                  thursday afternoon sessions will be booked for the current
                  month.
                </Text>
                <Text>
                  if you have already booked a session on one of the dates, you
                  will have the option to remove that date or dates from the
                  list and just book the remaining ones.
                </Text>
                <Text>
                  if one of the sessions has zero spaces left, this date will be
                  automatically removed from the list.
                </Text>
                <Text>
                  if a session isn't available, please check back regularly (
                  page refresh required ) in case there is a cancellation.
                </Text>
                <Text>
                  booking recurring sessions is on a first come first served
                  basis.
                </Text>
                <Text>
                  on the first day of the next month, you will then be able to
                  book sessions for the following month.
                </Text>
                <YellowGreenButton onClick={dispatchHideShownElement}>
                  Ok, Close
                </YellowGreenButton>
              </AccordionContent>
            )}
          </>
        </Accordion>
      </ParentDiv>
    </>
  );
};

export default BookRecurringSessionsTitleAndIntro;
