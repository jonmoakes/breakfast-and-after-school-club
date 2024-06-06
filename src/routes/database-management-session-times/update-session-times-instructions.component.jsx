import useShouldShowElementActions from "../../hooks/get-actions-and-thunks/use-should-show-element-actions";
import useGetShouldShowElementSelectors from "../../hooks/get-selectors/use-get-should-show-element-selectors";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../styles/div/div.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { Text } from "../../styles/p/p.styles";
import { LowercasedSpan, RedSpan } from "../../styles/span/span.styles";

const UpdateSessionTimesInstructions = ({ sessionTime, example }) => {
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
              to update this session time in the database, enter in the new
              session time into its respective input below ( there is one input
              for each session time ) and then tap the 'update session time'
              button when it appears.
            </Text>
            <Text>
              this will set the new session time for your users information.
            </Text>
            <Text>
              please enter in the following format using the 24 hour clock:
              <br />
              <RedSpan>
                HH:<LowercasedSpan>mm</LowercasedSpan>(space)-(space)HH:
                <LowercasedSpan>mm</LowercasedSpan>
              </RedSpan>
            </Text>

            <Text>
              for example:
              <br />
              <RedSpan>07:00 - 08:50</RedSpan>
              <br />
              for the morning session,
              <br />
              Or
              <br />
              <RedSpan>15:30 - 16:30</RedSpan>
              <br />
              for an afternoon session etc..
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

export default UpdateSessionTimesInstructions;

<>
  <BlackHr />
</>;
