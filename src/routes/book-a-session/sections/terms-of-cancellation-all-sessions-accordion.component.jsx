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
import { BlueSpan, RedSpan } from "../../../styles/span/span.styles";
import {
  BlackListItem,
  StyledUnorderedList,
} from "../../../styles/ul/ul.styles";

const TermsOfCancellationAllSessionsAccordion = ({
  morningSessionClosingTime,
  afternoonSessionClosingTime,
}) => {
  const {
    dispatchShowOppositeShowThirdElement,
    dispatchHideShownThirdElement,
  } = useShouldShowElementActions();
  const { shouldShowThirdElement } = useGetShouldShowElementSelectors();

  return (
    <ThirdAccordion {...{ shouldShowThirdElement }}>
      <>
        <ThirdAccordionTitle
          {...{ shouldShowThirdElement }}
          onClick={dispatchShowOppositeShowThirdElement}
        >
          <div>
            {shouldShowThirdElement ? "ok, close" : "cancellation info"}
          </div>
          <>{shouldShowThirdElement ? "-" : "+"}</>
        </ThirdAccordionTitle>

        {shouldShowThirdElement ? (
          <AccordionContent>
            <BlueH2>terms of cancellation:</BlueH2>
            <BlackHr /> <Text>if you've booked either the</Text>
            <StyledUnorderedList>
              <BlackListItem>
                <RedSpan>single morning session</RedSpan> or
              </BlackListItem>
              <BlackListItem>
                the <RedSpan>combined morning & afternoon sessions</RedSpan>
              </BlackListItem>
            </StyledUnorderedList>
            <Text>
              the latest time to cancel is:
              <br />
              <BlueSpan>{morningSessionClosingTime}AM</BlueSpan>
            </Text>
            <BlackHr />
            <Text>if you've booked a</Text>
            <StyledUnorderedList>
              <BlackListItem>
                <RedSpan>single afternoon session</RedSpan>
              </BlackListItem>
            </StyledUnorderedList>
            <Text>
              the latest time to cancel is:
              <br />
              <BlueSpan>{afternoonSessionClosingTime}PM</BlueSpan>
            </Text>
            <BlackHr />
            <YellowGreenButton onClick={dispatchHideShownThirdElement}>
              Ok, Close
            </YellowGreenButton>
          </AccordionContent>
        ) : null}
      </>
    </ThirdAccordion>
  );
};

export default TermsOfCancellationAllSessionsAccordion;
