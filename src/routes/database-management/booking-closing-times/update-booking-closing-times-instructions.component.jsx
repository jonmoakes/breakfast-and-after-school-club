import useShouldShowElementActions from "../../../hooks/get-actions-and-thunks/use-should-show-element-actions";
import useGetShouldShowElementSelectors from "../../../hooks/get-selectors/use-get-should-show-element-selectors";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import { LowercasedSpan, RedSpan } from "../../../styles/span/span.styles";

const UpdateBookingClosingTimesInstructions = () => {
  const { shouldShowElement } = useGetShouldShowElementSelectors();
  const { dispatchShowOppositeShowElement, dispatchHideShownElement } =
    useShouldShowElementActions();

  return (
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
              to update this value in the database, enter in the new time into
              the respective input below ( there is a separate input for the
              morning session and afternoon session times ) and then tap the
              'upload new time' button when it appears.
            </Text>
            <Text>
              this will set the new latest time that a user is allowed to book
              or cancel a session ( for bookings on the current date ).
            </Text>
            <Text>
              please enter in the following format using the 24 hour clock:
              <br />
              <RedSpan>
                HH:<LowercasedSpan>mm</LowercasedSpan>
              </RedSpan>
            </Text>

            <Text>
              for example:
              <br />
              <RedSpan>07:00 </RedSpan> for 7AM
              <br />
              or
              <br />
              <RedSpan>14:30 </RedSpan> for 2:30PM
            </Text>

            <YellowGreenButton onClick={dispatchHideShownElement}>
              Ok, Close
            </YellowGreenButton>
          </AccordionContent>
        )}
      </>
    </Accordion>
  );
};

export default UpdateBookingClosingTimesInstructions;
