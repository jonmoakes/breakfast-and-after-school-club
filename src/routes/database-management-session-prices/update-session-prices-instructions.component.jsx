import useGetShouldShowElementSelectors from "../../hooks/get-selectors/use-get-should-show-element-selectors";
import useShouldShowElementActions from "../../hooks/get-actions-and-thunks/use-should-show-element-actions";

import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

const UpdateSessionPricesInstructions = () => {
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
              to update this value in the database, enter in the new price into
              the respective input below ( there is one for each session price )
              and then tap the 'update price' button when it appears.
            </Text>
            <Text>
              this will set the new session price in the database, which will
              then take effect whenever a user goes to book a new session.
            </Text>
            <Text>
              please enter in a 'double' format with a decimal point. This is
              because how the app reads prices in the database.
            </Text>
            <Text>
              the maximum length of the value including the decimal point is 5
              characters long.
            </Text>
            <Text>
              the technical maximum price of a session is £50 ( 50.00 === 5
              characters ).
            </Text>

            <Text>
              for example:
              <br />
              <RedSpan>5.5</RedSpan> for £5.50
              <br />
              or
              <br />
              <RedSpan>5.0</RedSpan> for £5
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
export default UpdateSessionPricesInstructions;
