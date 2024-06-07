import useShouldShowElementActions from "../../hooks/get-actions-and-thunks/use-should-show-element-actions";
import useGetShouldShowElementSelectors from "../../hooks/get-selectors/use-get-should-show-element-selectors";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { RedText, Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";

const CancelSubscriptionAccordion = () => {
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
          <div>
            {shouldShowElement
              ? "ok, close"
              : "cancelling subscription information"}
          </div>
          <>{shouldShowElement ? "-" : "+"}</>
        </AccordionTitle>

        {shouldShowElement && (
          <AccordionContent>
            <BlueH2>cancelling your subscription:</BlueH2>
            <Text>
              please note that if you cancel your subscription, you will retain
              access to the app to the end of your billing period ( monthly or
              yearly depending on the subscription you chose ).
            </Text>
            <RedText>
              please make sure that you have made a copy of any important data
              before your subscription ends, as once it does, you will lose
              access to the app.
            </RedText>
            <Text>
              after your subscription ends, your account will be deleted and{" "}
              <RedSpan>
                all data will be deleted and is not recoverable.
              </RedSpan>
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

export default CancelSubscriptionAccordion;
