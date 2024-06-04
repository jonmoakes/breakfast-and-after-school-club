import useShouldShowElementActions from "../../../hooks/get-actions-and-thunks/use-should-show-element-actions";
import useGetShouldShowElementSelectors from "../../../hooks/get-selectors/use-get-should-show-element-selectors";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import {
  AccordionContent,
  ThirdAccordion,
  ThirdAccordionTitle,
} from "../../../styles/div/div.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { Text } from "../../../styles/p/p.styles";
import { BlueSpan } from "../../../styles/span/span.styles";

const TermsOfCancellationAfternoonSessionsAccordion = ({
  afternoonSessionClosingTime,
}) => {
  const {
    dispatchShowOppositeShowThirdElement,
    dispatchHideShownThirdElement,
  } = useShouldShowElementActions();
  const { shouldShowThirdElement } = useGetShouldShowElementSelectors();

  return (
    <ThirdAccordion {...{ shouldShowThirdElement }}>
      <ThirdAccordionTitle
        {...{ shouldShowThirdElement }}
        onClick={dispatchShowOppositeShowThirdElement}
      >
        <div>{shouldShowThirdElement ? "ok, close" : "cancellation info"}</div>
        <>{shouldShowThirdElement ? "-" : "+"}</>
      </ThirdAccordionTitle>

      {shouldShowThirdElement ? (
        <AccordionContent>
          <BlueH2>terms of cancellation:</BlueH2>
          <Text>
            please note that once a session is booked, the latest time that it
            can be cancelled on the day of the session is:
            <br />
            <BlueSpan>{afternoonSessionClosingTime}PM</BlueSpan>
          </Text>
          <BlackHr />

          <YellowGreenButton onClick={dispatchHideShownThirdElement}>
            Ok, Close
          </YellowGreenButton>
        </AccordionContent>
      ) : null}
    </ThirdAccordion>
  );
};

export default TermsOfCancellationAfternoonSessionsAccordion;
