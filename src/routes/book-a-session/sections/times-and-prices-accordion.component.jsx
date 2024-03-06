import { useSelector, useDispatch } from "react-redux";

import useConditionalLogic from "../book-a-session-hooks/use-conditional-logic";

import { selectRequestDateDataSelectors } from "../../../store/request-date-data/request-date-data.slice";
import {
  hideSecondElement,
  toggleShowSecondElement,
  selectShouldShowElementSelectors,
} from "../../../store/should-show-element/should-show-element.slice";

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
    morningSessionPrice,
    afternoonShortSessionPrice,
    afternoonLongSessionPrice,
    morningAndAfternoonShortSessionPrice,
    morningAndAfternoonLongSessionPrice,
  } = useConditionalLogic();

  const { shouldShowSecondElement } = useSelector(
    selectShouldShowElementSelectors
  );
  const {
    morningSessionTime,
    afternoonShortSessionTime,
    afternoonLongSessionTime,
  } = useSelector(selectRequestDateDataSelectors);

  const dispatch = useDispatch();

  // SecondAccordion is for if there are 2 accordions on a page as they have separate states.
  return (
    <SecondAccordion className="book-session" {...{ shouldShowSecondElement }}>
      <>
        <SecondAccordionTitle
          {...{ shouldShowSecondElement }}
          onClick={() => dispatch(toggleShowSecondElement())}
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
              <br /> cost:{" "}
              <BlueSpan>£{morningSessionPrice.toFixed(2)}</BlueSpan> per child.
            </Text>
            <BlackHr />
            <Text>
              afternoon session ( short ):
              <br />
              {afternoonShortSessionTime}
              <br /> cost:{" "}
              <BlueSpan>£{afternoonShortSessionPrice.toFixed(2)}</BlueSpan> per
              child.
            </Text>
            <BlackHr />
            <Text>
              afternoon session ( long ):
              <br />
              {afternoonLongSessionTime}
              <br /> cost:{" "}
              <BlueSpan>£{afternoonLongSessionPrice.toFixed(2)}</BlueSpan> per
              child.
            </Text>
            <BlackHr />
            <Text>
              morning and afternoon sessions
              <br />( short ):
              <br /> cost:{" "}
              <BlueSpan>
                £{morningAndAfternoonShortSessionPrice.toFixed(2)}
              </BlueSpan>{" "}
              per child.
            </Text>
            <BlackHr />
            <Text>
              morning and afternoon sessions
              <br />( long ):
              <br /> cost:{" "}
              <BlueSpan>
                £{morningAndAfternoonLongSessionPrice.toFixed(2)}
              </BlueSpan>{" "}
              per child.
            </Text>
            <BlackHr />
            <Text>
              note: the only options that will show are the options that are
              covered by the current funds in your wallet.
            </Text>
            <BlackHr />

            <YellowGreenButton onClick={() => dispatch(hideSecondElement())}>
              Ok, Close
            </YellowGreenButton>
          </AccordionContent>
        ) : null}
      </>
    </SecondAccordion>
  );
};

export default TimesAndPricesAccordion;
