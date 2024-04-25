import Balancer from "react-wrap-balancer";

import useGetShouldShowElementSelectors from "../../../hooks/get-selectors/use-get-should-show-element-selectors";
import useShouldShowElementActions from "../../../hooks/get-actions-and-thunks/use-should-show-element-actions";

import {
  Accordion,
  AccordionContent,
  AccordionTitle,
  ParentDiv,
} from "../../../styles/div/div.styles";
import { BlackTitle } from "../../../styles/h1/h1.styles";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { Text } from "../../../styles/p/p.styles";

const ChooseErrorTitleAndAccordion = () => {
  const { shouldShowElement } = useGetShouldShowElementSelectors();
  const { dispatchShowOppositeShowElement, dispatchHideShownElement } =
    useShouldShowElementActions();

  return (
    <ParentDiv>
      <Balancer>
        <BlackTitle>choose the error id</BlackTitle>
      </Balancer>

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
                on this page, you can choose the appropriate error id in the
                email that you received.
              </Text>
              <Text>
                you should only need to be on this page, if you have received an
                email that an error occured when a user made or cancelled a
                booking.
              </Text>
              <Text>
                depending on what error id you have, when you tap on its
                respective button, you can then enter in whatever data is
                required to fix the error in the next page.
              </Text>

              <YellowGreenButton onClick={dispatchHideShownElement}>
                Ok, Close
              </YellowGreenButton>
            </AccordionContent>
          )}
        </>
      </Accordion>
    </ParentDiv>
  );
};
export default ChooseErrorTitleAndAccordion;
