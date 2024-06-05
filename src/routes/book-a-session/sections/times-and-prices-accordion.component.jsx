import usePricesToFixedLogic from "../../../hooks/use-prices-to-fixed-logic";
import useGetRequestDateDataSelectors from "../../../hooks/get-selectors/use-get-request-date-data-selectors";
import useShouldShowElementSelectors from "../../../hooks/get-selectors/use-get-should-show-element-selectors";
import useShouldShowElementActions from "../../../hooks/get-actions-and-thunks/use-should-show-element-actions";

import {
  SecondAccordion,
  AccordionContent,
  SecondAccordionTitle,
} from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { BlueSpan } from "../../../styles/span/span.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const TimesAndPricesAccordion = () => {
  const {
    morningSessionPriceToFixed,
    afternoonShortSessionPriceToFixed,
    afternoonLongSessionPriceToFixed,
    morningAndAfternoonShortSessionPriceToFixed,
    morningAndAfternoonLongSessionPriceToFixed,
  } = usePricesToFixedLogic();
  const {
    morningSessionTime,
    afternoonShortSessionTime,
    afternoonLongSessionTime,
  } = useGetRequestDateDataSelectors();
  const {
    dispatchShowOppositeShowSecondElement,
    dispatchHideShownSecondElement,
  } = useShouldShowElementActions();
  const { shouldShowSecondElement } = useShouldShowElementSelectors();

  // SecondAccordion is for if there are 2 accordions on a page as they have separate states.
  return (
    <SecondAccordion className="book-session" {...{ shouldShowSecondElement }}>
      <>
        <SecondAccordionTitle
          {...{ shouldShowSecondElement }}
          onClick={dispatchShowOppositeShowSecondElement}
        >
          <div>
            {shouldShowSecondElement ? "ok, close" : "view times & prices"}
          </div>
          <>{shouldShowSecondElement ? "-" : "+"}</>
        </SecondAccordionTitle>

        {shouldShowSecondElement ? (
          <AccordionContent>
            <BlackHr />
            <Text>
              morning session:
              <br />
              {morningSessionTime}
              <br /> cost: <BlueSpan>
                £{morningSessionPriceToFixed}
              </BlueSpan>{" "}
              per child.
            </Text>

            <BlackHr />

            {afternoonShortSessionPriceToFixed ? (
              <>
                <Text>
                  afternoon session ( short ):
                  <br />
                  {afternoonShortSessionTime}
                  <br /> cost:{" "}
                  <BlueSpan>£{afternoonShortSessionPriceToFixed}</BlueSpan> per
                  child.
                </Text>{" "}
                <BlackHr />
              </>
            ) : null}

            <Text>
              {afternoonShortSessionPriceToFixed
                ? "Afternoon Session ( Long ):"
                : "Afternoon Session"}
              <br />
              {afternoonLongSessionTime}
              <br /> cost:{" "}
              <BlueSpan>£{afternoonLongSessionPriceToFixed}</BlueSpan> per
              child.
            </Text>

            <BlackHr />

            {afternoonShortSessionPriceToFixed ? (
              <>
                <Text>
                  morning and afternoon sessions
                  <br />( short ):
                  <br /> cost:{" "}
                  <BlueSpan>
                    £{morningAndAfternoonShortSessionPriceToFixed}
                  </BlueSpan>{" "}
                  per child.
                </Text>

                <BlackHr />

                <Text>
                  morning and afternoon sessions
                  <br />( long ):
                  <br /> cost:{" "}
                  <BlueSpan>
                    £{morningAndAfternoonLongSessionPriceToFixed}
                  </BlueSpan>{" "}
                  per child.
                </Text>

                <BlackHr />
              </>
            ) : null}

            <Text>
              note: the only options that will show are the options that are
              covered by the current funds in your wallet.
            </Text>
            <BlackHr />

            <YellowGreenButton onClick={dispatchHideShownSecondElement}>
              Ok, Close
            </YellowGreenButton>
          </AccordionContent>
        ) : null}
      </>
    </SecondAccordion>
  );
};

export default TimesAndPricesAccordion;
