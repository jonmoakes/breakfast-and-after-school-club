import useGetShouldShowElementSelectors from "../../hooks/get-selectors/use-get-should-show-element-selectors";
import useShouldShowElementActions from "../../hooks/get-actions-and-thunks/use-should-show-element-actions";

import WalletBalance from "../../components/wallet-balance/wallet-balance.component";

import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const BookRecurringSessionsTitleAndIntro = ({ monthAsString }) => {
  const { shouldShowElement } = useGetShouldShowElementSelectors();
  const { dispatchShowOppositeShowElement, dispatchHideShownElement } =
    useShouldShowElementActions();

  return (
    <>
      <ParentDiv>
        <BlackTitle>book recurring sessions</BlackTitle>
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
                <Text>you can only book one day in the month at a time.</Text>
                <Text>book each day as necessary.</Text>
                <Text>
                  for example, if you want every monday and thursday in the
                  morning session, choose the 'monday' button and then tap the
                  'morning' button{" "}
                </Text>
                <Text>
                  once you have seen what dates we have spaces available on and
                  confirmed, those sessions will be booked.
                </Text>
                <Text>
                  then, repeat the process but choose 'thursday' as your day and
                  'morning' as your session.
                </Text>
                <Text>
                  view and confirm the dates and then all monday and thursday
                  sessions will be booked for the current month.
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
